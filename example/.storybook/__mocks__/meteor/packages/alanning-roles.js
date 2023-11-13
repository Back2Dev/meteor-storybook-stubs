import { action } from '@storybook/addon-actions'

export default {
  getRolesForUser: action('getRolesForUser'),
  createRole: action('createRole'),
  addUsersToRoles: action('addUsersToRoles'),
  // userIsInRole(user, role),
  userIsInRole: action('userIsInRole'),
}

export const Roles = ['WSLEAD', 'WSADM']
