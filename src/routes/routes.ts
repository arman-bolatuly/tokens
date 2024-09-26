import { createBrowserRouter } from 'react-router-dom'

import { privateRoutes } from './privateRoutes'
import App from '../App'
import ErrorPage from '../pages/Error'
import Login from '../pages/Login'
import Registration from '../pages/Registration'

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
])
