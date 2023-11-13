import { action } from '@storybook/addon-actions'
import dbg from 'debug'
const debug = dbg('app:sbmocks/meteor/meteor')

const callData = {}

// Simulate a Meteor method call
const call = (method, ...args) => {
  // Log an action to the storybook actions tab...
  action(`Meteor.call()`, method, args)
  if (callData[method]) {
    // If we have data locally, we can return it...
    const cb = args.at(-1)
    if (typeof cb === 'function') {
      args.pop()
      // debug() is like console.log(), but silent unless localStorage.debug is set to "app:*"
      debug(`Meteor.call("${method}")`, args)
      // Do the callback with the data from the callData cache
      cb(null, callData[method])
    } else {
      // If there was no callback function, simply return a Promise with the data
      return new Promise((resolve, reject) => {
        resolve(callData[method])
      })
    }
  }
}

const prime = (method, data) => {
  callData[method] = data
  debug(`Primed callback data for method: "${method}"`, data)
}

export const Meteor = {
  settings: {
    private: {
      API_SECRET: 'xxx',
      NCC_API_SECRET: 'xxx=',
      S3_REGION: 'ap-southeast-2',
      S3_ACCESS_KEY_ID: 'xxx',
      S3_SECRET_ACCESS_KEY: 'xxx',
      UPLOAD_BUCKET: 'local-docs...',
      S3_PUBLIC_URL: 'http:/xxx-website-ap-southeast-2.amazonaws.com',
      EMAIL_INFO_TO: 'xxx+dev-notify@test.com.au',
      EMAIL_TO_ADMIN: 'xxx+dev-admin@test.com.au',
      INVITE_USER: 'http://localhost:3080/signup-from-link/?token=',
      DOCUMENTS_BUCKET: 'local-docs...',
      MANDRILL_API_KEY: 'xxx',
    },
    env: {
      environment: 'dev',
      ROOT_URL: 'http://localhost:3080/',
    },
    public: {
      env: 'dev',
      NCC_URL: 'https://api.xxx.xxx/identity_v1.0',
      S3_PUBLIC_URL: 'http:/xxx.s3-website-ap-southeast-2.amazonaws.com',
    },
  },
  startup: () => {},
  _localStorage: window ? window.localStorage : { setItem: () => {}, getItem: () => {} },
  isClient: true,
  isServer: false,
  absoluteUrl: () => 'http://localhost/',
  userId: () => '1234',
  user: () => ({ _id: '1234' }),
  setTimeout: () => {},
  clearTimeout: () => {},
  call,
  callAsync: call,
  logout: action('logout()'),
  // This one provides a mechanism to prime the data for a subsequent method call
  prime,
  loginWithGoogle: action('loginWithGoogle()'),
  loginWithFacebook: action('loginWithFacebook()'),
  loginWithPassword: action('loginWithPassword()'),
  subscribe: () => ({
    ready: () => true,
  }),
}
