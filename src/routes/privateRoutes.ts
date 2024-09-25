import type { RouteObject } from 'react-router-dom'

import Home from '../pages/Home'
// import Map from '../pages/Map'
// import Statistics from '../pages/Statistics'
// import SalesReports from '../pages/SalesReports'
// import Applications from '../pages/Applications'
// import FinBoard from '../pages/FinBoard'
// import PaymentCalendar from '../pages/PaymentCalendar'
// import PressService from '../pages/PressService'

export const privateRoutes: Array<RouteObject> = [
  {
    path: '/',
    Component: Home,
  },
  // {
  //   path: '/map',
  //   Component: Map,
  // },
  // {
  //   path: '/statistics',
  //   Component: Statistics,
  // },
  // {
  //   path: '/sales-reports',
  //   Component: SalesReports,
  // },
  // {
  //   path: '/applications',
  //   Component: Applications,
  // },
  // {
  //   path: '/finboard',
  //   Component: FinBoard,
  // },
  // {
  //   path: '/payment-calendar',
  //   Component: PaymentCalendar,
  // },
  // {
  //   path: '/press-service',
  //   Component: PressService,
  // },
]
