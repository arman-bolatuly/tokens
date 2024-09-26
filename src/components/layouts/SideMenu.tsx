import React from 'react'
import { IconSettings, IconCoinTaka } from '@tabler/icons-react'

const AssetsManagement = [
  {
    label: 'Tokens',
    icon: IconCoinTaka,
    link: '/tokens',
  },
  {
    label: 'All STO Funding Assets',
    icon: IconSettings,
    link: '/all-sto-funding-assets',
  },
  {
    label: 'Assets Reports',
    icon: IconSettings,
    link: '/assets-reports',
  },
]

const TradingExchanges = [
  {
    label: 'OTC Traders',
    icon: IconSettings,
    link: '/OTC-traders',
  },
  {
    label: 'Currency Exchange',
    icon: IconSettings,
    link: '/currency-exchange',
  },
]

const InvestorsFinancials = [
  {
    label: 'Investors',
    icon: IconSettings,
    link: '/investors',
  },
  {
    label: 'Statements',
    icon: IconSettings,
    link: '/statements',
  },
]

const Administration = [
  {
    label: 'Admin Users/Issuers',
    icon: IconSettings,
    link: '/adminUsers-issuers',
  },
  {
    label: 'Admin Banks',
    icon: IconSettings,
    link: '/admin-banks',
  },
  {
    label: 'KYC Settings',
    icon: IconSettings,
    link: '/kyc-settings',
  },
  {
    label: 'OTC Settings',
    icon: IconSettings,
    link: '/otc-settings',
  },
]

import type { FC } from 'react'

import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Divider } from '@mantine/core'

const MenuItem = (item: any) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <NavLink
      to={`${item.link}`}
      style={({ isActive }) => ({
        backgroundColor: isActive || isHovered ? '#FFFFFF' : 'transparent',
        padding: 8,
        fontWeight: 500,
        fontSize: 15,
        lineHeight: '20px',
        display: 'flex',
        alignItems: 'center',
        textDecoration: 'none',
        borderRadius: 10,
        marginBottom: 2,
        transition: 'all 0.4s ease-in-out',
        color: isActive || isHovered ? '#087f5b' : '#9DA5B2',
      })}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <item.icon />{' '}
      <span
        className="ml-3 text-[#121F33]"
        style={{
          color: isHovered ? '#087f5b' : '#ffffff',
          transition: 'all 0.4s ease-in-out',
        }}
      >
        {item.label}
      </span>
    </NavLink>
  )
}

interface MenuSectionProps {
  title: string
  children: React.ReactNode
}

const MenuSection = ({ title, children }: MenuSectionProps) => {
  return (
    <div className="flex flex-col">
      <p className="caption1 text-[#9DA5B2] mb-4">{title}</p>

      {children}
    </div>
  )
}

const SideMenu: FC = () => {
  return (
    <div>
      <MenuSection title="Assets Management">
        {AssetsManagement.map((item: any) => (
          <MenuItem
            key={item.label}
            icon={item.icon}
            label={item.label}
            link={item.link}
            messageCount={item.messageCount}
          />
        ))}
      </MenuSection>

      <Divider className="my-2" />

      <MenuSection title="Administration">
        {Administration.map((item: any) => (
          <MenuItem
            key={item.label}
            icon={item.icon}
            label={item.label}
            link={item.link}
            messageCount={item.messageCount}
          />
        ))}
      </MenuSection>

      <Divider className="my-2" />

      <MenuSection title="Trading & Exchanges">
        {TradingExchanges.map((item: any) => (
          <MenuItem
            key={item.label}
            icon={item.icon}
            label={item.label}
            link={item.link}
            messageCount={item.messageCount}
          />
        ))}
      </MenuSection>

      <Divider className="my-2" />

      <MenuSection title="Investors & Financials">
        {InvestorsFinancials.map((item: any) => (
          <MenuItem
            key={item.label}
            icon={item.icon}
            label={item.label}
            link={item.link}
            messageCount={item.messageCount}
          />
        ))}
      </MenuSection>
    </div>
  )
}

export default SideMenu
