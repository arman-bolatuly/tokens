import { createBrowserRouter } from 'react-router-dom'

import App from '../App'
import Home from '../pages/Home'
import Login from '../pages/Login'
import ErrorPage from '../pages/Error'
import Registration from '../pages/Registration'
import { privateRoutes } from './privateRoutes'

export const router = createBrowserRouter([
  {
    path: '/',
    Component: App,
    children: privateRoutes,
    ErrorBoundary: ErrorPage,
  },
  {
    path: '/login',
    Component: Login,
  },
  {
    path: '/registration',
    Component: Registration,
  },
  {
    path: '/home',
    Component: Home,
  },
])
