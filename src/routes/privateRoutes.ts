import type { RouteObject } from 'react-router-dom'

import Home from '../pages/Home'
import Tokens from '../pages/Tokens'
import Profile from '../pages/Profile'
import Investors from '../pages/Investors'
import AdminsIssuers from '../pages/AdminsIssuers'

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
    path: '/investors',
    Component: Investors,
  },
  {
    path: '/admins-issuers',
    Component: AdminsIssuers,
  },
]
