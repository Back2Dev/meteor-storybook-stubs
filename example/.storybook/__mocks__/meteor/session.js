import { action } from '@storybook/addon-actions'
const data = { viewas: 'WSADM' }
export const Session = {
  get: (key) => data[key],
  set: (key, value) => (data[key] = value),
}
