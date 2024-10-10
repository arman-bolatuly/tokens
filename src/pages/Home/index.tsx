import {
  Divider,
  Title,
  Button,
  UnstyledButton,
  Portal,
  Box,
  rem,
} from '@mantine/core'
// import { useHeadroom } from '@mantine/hooks'
import { useNavigate } from 'react-router-dom'

import First from './First'
import Second from './Second'
import Third from './Third'
import Fourth from './Fourth'
import Fifth from './Fifth'
import Sixth from './Sixth'
import Seventh from './Seventh'

const Home = () => {
  const navigate = useNavigate()
  // const pinned = useHeadroom({ fixedAt: 120 })
  return (
    <div className="flex flex-col">
      <Portal>
        <Box
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            padding: 'var(--mantine-spacing-xs)',
            height: rem(60),
            zIndex: 1000000,
            // transform: `translate3d(0, ${pinned ? 0 : rem(-110)}, 0)`,
            // transition: 'transform 400ms ease',
            backgroundColor: '#0d1d29',
          }}
        >
          <header className="flex justify-between items-center h-16 px-4">
            <Title
              order={3}
              c="#FFFFFF"
              className="cursor-pointer text-[#FFFFFF]"
              onClick={() => navigate('/home')}
            >
              TokenX
            </Title>

            <div className="flex items-center space-x-4">
              <UnstyledButton c="#FFF">Решение</UnstyledButton>
              <Divider orientation="vertical" />
              <UnstyledButton c="#FFF">Варианты использование</UnstyledButton>
              <Divider orientation="vertical" />
              <UnstyledButton c="#FFF">Токен BKN</UnstyledButton>
              <Divider orientation="vertical" />
              <UnstyledButton c="#FFF">О нас</UnstyledButton>
              <Divider orientation="vertical" />
              <UnstyledButton c="#FFF">Ресурсы</UnstyledButton>
            </div>

            <div className="flex items-center space-x-4">
              <Button
                variant="light"
                onClick={() => navigate('/sto')}
                className="cursor-pointer"
              >
                STO Market
              </Button>

              <Button variant="default" onClick={() => navigate('/login')}>
                Login
              </Button>

              <Button onClick={() => navigate('/registration')}>Sign up</Button>
            </div>
          </header>
          <Divider />
        </Box>
      </Portal>

      <div className="flex flex-col mx-60">
        <First />

        <Second />

        <Third />

        <Fourth />

        <Fifth />

        <Sixth />

        <Seventh />
      </div>
    </div>
  )
}

export default Home
