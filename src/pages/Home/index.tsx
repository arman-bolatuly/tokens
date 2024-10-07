import { Divider, Title, Button, UnstyledButton } from '@mantine/core'
import { useNavigate } from 'react-router-dom'

import First from './First'
import Second from './Second'
import Third from './Third'
import Fourth from './Fourth'

const Home = () => {
  const navigate = useNavigate()
  return (
    <div className="flex flex-col">
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
          <Button variant="default" onClick={() => navigate('/login')}>
            Login
          </Button>

          <Button onClick={() => navigate('/registration')}>Sign up</Button>
        </div>
      </header>

      <Divider />

      <div className="flex flex-col mx-40">
        <First />

        <Second />

        <Third />

        <Fourth />
      </div>
    </div>
  )
}

export default Home
