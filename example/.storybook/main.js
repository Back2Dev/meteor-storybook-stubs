const CircularDependencyPlugin = require('circular-dependency-plugin')
const path = require('path')

const mocks = {
  // Meteor core modules
  ['meteor/meteor']: 'meteor/meteor.js',
  ['meteor/mongo']: 'meteor/mongo.js',
  ['meteor/tracker']: 'meteor/tracker.js',
  ['meteor/random']: 'meteor/random.js',
  ['meteor/check']: 'meteor/check.js',
  ['meteor/session']: 'meteor/session.js',
  ['meteor/react-meteor-data']: 'meteor/react-meteor-data.js',
  // Meteor packages
  ['meteor/mikkelking:slingshot']: 'meteor/packages/slingshot.js',
  ['meteor/alanning:roles']: 'meteor/packages/alanning-roles.js',
  // npm modules
  ['pdf-lib']: 'pdf-lib.js',
  ['/imports/ui/components/guided-tour/guided-tour']: 'guided-tour.js',
  ['@reactour/tour']: 'guided-tour.js',
  // React router
  ['react-router-dom']: 'react-router-dom.js',
  ['react-router']: 'react-router-dom.js',
  // Application providers
  ['/imports/ui/contexts/account-provider']: 'account-provider.js',
  ['/imports/lib/log']: 'logger.js',
  ['/imports/api/utils/get-settings']: 'get-settings.js',
}

module.exports = {
  stories: [
    // '../imports/ui/**/*.stories.@(js|mdx)'
    process.env.STORYBOOK_BASE + '/**/*.stories.@(js|jsx|mdx)',
  ],
  features: {
    storyStoreV7: true,
  },
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-storysource',
    '@storybook/addon-actions',
  ],
  core: { builder: 'webpack5' },
  typescript: { reactDocgen: false },
  webpackFinal: async (config, { presets }) => {
    const instance = (await presets.apply('webpackInstance')).default
    // need these 2 lines because builder renders incomplete stories as it uses form/framework
    // context which imports preview-panel which logs a ReferenceError: EditorPanel not defined
    Object.keys(mocks).forEach((key) => {
      config.resolve.alias[key] = require.resolve(`./__mocks__/${mocks[key]}`)
    })

    config.plugins.push(
      new CircularDependencyPlugin({
        // exclude detection of files based on a RegExp
        exclude: /node_modules/,
        // add errors to webpack instead of warnings
        failOnError: true,
        // allow import cycles that include an asyncronous import,
        // e.g. via import(/* webpackMode: "weak" */ './file.js')
        allowAsyncCycles: false,
        // set the current working directory for displaying module paths
        cwd: process.cwd(),
      })
    )

    return config
  },
}

// const config = {
// conmode: 'production', // "production" | "development" | "none"
