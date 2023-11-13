import dbg from 'debug'
const debug = dbg('app:sb-settings')

// Mock data for get-settings.js
const settings = {}
const settingsArray = (value) => {
  // convert setting to array if its a string
  if (typeof value === 'string') return value.split(',')
  if (typeof value === Array) return value
  return []
}

const settingsNumber = (value) => {
  if (isNaN(parseInt(value))) {
    console.error(value)
    return 1000
  }
  return parseInt(value)
}

export const getSettingAsync = async ({ key, type, defaultValue }) => {
  try {
    const setting = settings[key]
    let value = `MISSING SETTING: ${key}`
    if (setting) value = setting.value
    else value = defaultValue || value
    debug({ mock: 'getSettingAsync', key, value })

    let ret = null
    switch (type) {
      case 'number':
        ret = settingsNumber(value)
      case 'array':
        ret = settingsArray(value)
      case 'string':
        ret = value
      default:
        ret = null
    }
    return new Promise((resolve, reject) => {
      resolve(ret)
    })
  } catch (e) {
    console.error(e)
    return new Promise((resolve, reject) => {
      resolve(null)
    })
  }
}

/**
 * Use this on client side only
 */
export const getSetting = ({ key, type, defaultValue }) => {
  try {
    const setting = settings[key]
    let value = `MISSING SETTING: ${key}`
    if (setting) value = setting.value
    else value = defaultValue || value
    debug({ mock: 'getSetting (ui)', key, value })
    switch (type) {
      case 'number':
        return settingsNumber(value)
      case 'array':
        return settingsArray(value)
      case 'string':
        return value
      default:
        return null
    }
  } catch (e) {
    console.error(e)
    return null
  }
}
