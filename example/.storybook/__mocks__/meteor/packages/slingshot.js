import { action } from '@storybook/addon-actions'

/**
 * Normally this file would be imported with something like
 *   import Slingshot from 'meteor/mikkelking/slingshot'
 * but it doesn't work properly.
 * The workaround is to edit .storybook/preview.js and
 * put these lines in
 *
 *   import Slingshot from './__mocks__/meteor/packages/slingshot'
 *   .
 *   .
 *   // Need to set a global here for the Meteor/Slinghot package
 *   window.Slingshot = Slingshot
 *
 */
const methods = {
  send: () => action('slingshot-send'),
  progress: () => 50,
}

class Upload {
  constructor() {
    this.send = () => action('slingshot-send')
    this.progress = () => 50
    this.autorun = action('autorun')
  }
  Upload() {
    return methods
  }
}

export default { Upload }
