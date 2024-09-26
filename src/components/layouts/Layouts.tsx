import {
  AppShell,
  Burger,
  Group,
  Avatar,
  Text,
  Title,
  ActionIcon,
} from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { useNavigate, Outlet } from 'react-router-dom'
import { IconSettings, IconBell } from '@tabler/icons-react'

import SideMenu from './SideMenu'

const Layouts = () => {
  const navigate = useNavigate()

  const [mobileOpened, { toggle: toggleMobile }] = useDisclosure()
  const [desktopOpened, { toggle: toggleDesktop }] = useDisclosure(true)

  const isAuth = true
  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: 'sm',
        collapsed: { mobile: !mobileOpened, desktop: !desktopOpened },
      }}
      padding="md"
      bg={'#0D1D29'}
    >
      <AppShell.Header bg={'#0D1D29'}>
        <Group h="100%" px="md">
          {isAuth && (
            <>
              <Burger
                opened={mobileOpened}
                onClick={toggleMobile}
                hiddenFrom="sm"
                size="sm"
                color="#FFFFFF"
              />
              <Burger
                opened={desktopOpened}
                onClick={toggleDesktop}
                visibleFrom="sm"
                size="sm"
                color="#FFFFFF"
              />
            </>
          )}

          <Title
            order={3}
            c="#FFFFFF"
            className="cursor-pointer text-[#FFFFFF]"
            onClick={() => navigate('/')}
          >
            TokenX
          </Title>

          <div className="flex items-center space-x-2 ml-auto">
            <ActionIcon variant="transparent">
              <IconBell color="#FFFFFF" />
            </ActionIcon>

            <ActionIcon variant="transparent">
              <IconSettings color="#FFFFFF" />
            </ActionIcon>

            <Avatar size={30} className="cursor-pointer" color="#FFFFFF">
              AB
            </Avatar>
          </div>
        </Group>
      </AppShell.Header>

      {isAuth && (
        <AppShell.Navbar p="md" bg={'#122839'}>
          <div className="flex flex-col space-x-4 my-4">
            <Avatar
              size={100}
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80"
              mx={'auto'}
              pb={4}
            />

            <Title order={3} c="#FFFFFF" mx={'auto'}>
              John Doe
            </Title>

            <Text c="#087f5b" mx={'auto'} className="smallDemibold">
              VP Fancy Admin
            </Text>
          </div>

          <SideMenu />
          {/* {Array(10)
            .fill(0)
            .map((_, index) => (
              <Skeleton key={index} h={28} mt="sm" animate={false} />
            ))} */}
        </AppShell.Navbar>
      )}

      <AppShell.Main
        bg={'#0D1D29'}
        // className="bg-gradient-to-b from-[#0D1D29] via-[#0D1D29] to-[#0D1D29]"
      >
        <Outlet />
      </AppShell.Main>
    </AppShell>
  )
}

export default Layouts
