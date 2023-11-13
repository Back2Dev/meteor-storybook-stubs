// Mock for react-router-dom
import React from 'react'
import { action } from '@storybook/addon-actions'

export const Link = ({ to, children }) => (
  <a onClick={(e)=>{e.preventDefault(); action(`link to ${to}`)(e)}} href=''>{children}</a>
)

export const useHistory = () => ({
  push: action('navigate'),
  location: {
    search: 'http://localhost:3080/',
  },
})

export const matchPath = ()=>true
export const useLocation = () => ({
  search: `?state=NSW`,
})

export const Route = ({ path }) => <div>Route {path}</div>

export const Switch = ({ children }) => <div>{children}</div>
