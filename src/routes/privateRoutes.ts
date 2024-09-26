import type { RouteObject } from 'react-router-dom'

import Profile from '../pages/Profile'
import Home from '../pages/Home'

export const privateRoutes: Array<RouteObject> = [
  {
    path: '/',
    Component: Home,
  },
  {
    path: '/profile',
    Component: Profile,
  },
]
