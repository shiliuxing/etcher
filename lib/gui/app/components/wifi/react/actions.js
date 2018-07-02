'use strict'

const wifiServiceEndpoint = process.env.WIFI_SERVICE_ENDPOINT || 'http://localhost:8080'

module.exports = {
  isActive: () => {
    const method = 'isActive'
    const api = `${wifiServiceEndpoint}/${method}`
    return fetch(api)
      .then((res) => {
        return res.json()
      })
      .then((res) => {
        return res.active
      })
      .catch((err) => {
        return err
      })
  },

  toggleWifi: (value) => {
    const method = 'toggleWifi'
    const api = `${wifiServiceEndpoint}/${method}`
    return fetch(api, {
      method: 'POST',
      body: JSON.stringify({ value })
    })
      .then((res) => {
        return res.json()
      })
      .then((res) => {
        return res.active
      })
      .catch((err) => {
        return err
      })
  },

  getNetworks: () => {
    const method = 'getNetworks'
    const api = `${wifiServiceEndpoint}/${method}`
    return fetch(api)
      .then((res) => {
        return res.json()
      })
      .then((networks) => {
        return networks.nearbyNetworks
      })
      .catch((err) => {
        return err
      })
  },

  getCurrentNetwork: () => {
    const method = 'getCurrentNetwork'
    const api = `${wifiServiceEndpoint}/${method}`
    return fetch(api)
      .then((res) => {
        return res.json()
      })
      .then((networks) => {
        return networks
      })
      .catch((err) => {
        return err
      })
  },

  connect: (value) => {
    const method = 'connect'
    const api = `${wifiServiceEndpoint}/${method}`
    return fetch(api, {
      method: 'POST',
      body: JSON.stringify({ value })
    })
      .then((res) => {
        return res.json()
      })
      .then((success) => {
        return success
      })
      .catch((err) => {
        return err
      })
  },

  forget: (value) => {
    const method = 'forget'
    const api = `${wifiServiceEndpoint}/${method}`
    return fetch(api, {
      method: 'POST',
      body: JSON.stringify({ value })
    })
      .then((res) => {
        return res.json()
      })
      .then((success) => {
        return success
      })
      .catch((err) => {
        return err
      })
  }
}
