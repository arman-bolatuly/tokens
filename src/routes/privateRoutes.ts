import type { RouteObject } from 'react-router-dom'

// import Home from '../pages/Home'
import Cases from '../pages/Cases'
import Trade from '../pages/Trade'
import Tokens from '../pages/Tokens'
import Wallets from '../pages/Wallets'
import Profile from '../pages/Profile'
import Investors from '../pages/Investors'
import Portfolio from '../pages/Portfolio'
import AdminBanks from '../pages/AdminBank'
import TokenList from '../pages/Tokens/TokenList'
import AdminsIssuers from '../pages/AdminsIssuers'
import IssuerRegistration from '../pages/IssuerRegistration'

export const privateRoutes: Array<RouteObject> = [
  // {
  //   path: '/',
  //   Component: Home,
  // },
  {
    path: '/profile',
    Component: Profile,
  },
  {
    path: '/tokens',
    Component: Tokens,
  },
  {
    path: 'tokens/cases/:caseId',
    Component: TokenList,
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
    path: '/issuer-registration',
    Component: IssuerRegistration,
  },
  {
    path: '/admin-banks',
    Component: AdminBanks,
  },
  {
    path: '/trade',
    Component: Trade,
  },
  {
    path: '/wallets',
    Component: Wallets,
  },
  {
    path: '/portfolio',
    Component: Portfolio,
  },
]
