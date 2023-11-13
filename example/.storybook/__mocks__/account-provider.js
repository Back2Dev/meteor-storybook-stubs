import React from 'react'
import PropTypes from 'prop-types'

import { AccountContext } from '/imports/ui/contexts/account-context'

export const AccountProvider = (props) => {
  const { children, action } = props
  let viewas = 'WSADM'
  const loading = false
  const user = { name: 'Fozzie Bear' }
  const roles = ['WSADM', 'ADM']
  const loadingProfile = false
  const profile = {
    mobile: '911',
    mobileVerified: true,
    acceptTerms: true,
    signature: '/images/my-sig.png',
    timezone: 'America/Los Angeles',
    survey: {},
    nickname: 'Zaphod',
    name: 'Zaphod Beeblebrox',
  }

  const saveIncomplete = action('save incomplete')

  const getSMSCode = action('Get SMS code')

  const checkSMSCode = action('Check SMS code')

  const account = {
    isLoggedIn: !!user,
    currentUser: user,
    loading,
    loadingProfile,
    user,
    profile,
    viewas,
    incomplete: false,
    saveIncomplete,
    getSMSCode,
    checkSMSCode,
  }

  /**
   * Set the viewas session and viewas var in account context
   * @param {string} role
   * @return {Object} result
   */
  const setViewas = action('Set viewas')

  return (
    <AccountContext.Provider value={{ ...account, setViewas }}>
      {children}
    </AccountContext.Provider>
  )
}

AccountProvider.propTypes = {
  children: PropTypes.node.isRequired,
}
