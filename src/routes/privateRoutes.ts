import type { RouteObject } from 'react-router-dom'

import Home from '../pages/Home'
import Tokens from '../pages/Tokens'
import Profile from '../pages/Profile'
import Investors from '../pages/Investors'
import AdminsIssuers from '../pages/AdminsIssuers'
import AdminBanks from '../pages/AdminBank'
import Cases from '../pages/Cases'


export const privateRoutes: Array<RouteObject> = [
  {
    path: '/',
    Component: Home,
  },
  {
    path: '/profile',
    Component: Profile,
  },
  {
    path: '/tokens',
    Component: Tokens,
  },
  {
    path: '/cases',
    Component: Cases,
  },
  {
    path: '/investors',
    Component: Investors,
  },
  {
    path: '/admins-issuers',
    Component: AdminsIssuers,
  },
  {
    path: '/admin-banks',
    Component: AdminBanks,
  },
]
