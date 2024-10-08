import { Divider, Title, Button, UnstyledButton } from '@mantine/core'
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

        <Fifth/>

        <Sixth/>

        <Seventh/>
      </div>
    </div>
  )
}

export default Home

{
  /* <div className="w-full flex flex-row-reverse justify-between items-start space-x-8 space-x-reverse">
        <div className="flex flex-col space-y-6 w-[400px] bg-[#FFFFFF] py-6 px-4 rounded-xl">
          <div className="text-center">
            <span className="text-[19px] font-bold leading-[22px] tracking-[-0.32px]">
              Развитие технологии блокчейн
            </span>
          </div>

          <section className="flex flex-col space-y-4">
            <h2 className="text-xl text-center font-semibold">
              Что такое блокчейн?
            </h2>
            <p className="text-gray-700 text-sm">
              Блокчейн — это децентрализованная база данных, которая хранит
              информацию в виде блоков, связанных друг с другом. Каждый блок
              содержит данные и уникальный код (хэш), который делает его
              неизменяемым после создания.
            </p>

            <h3 className="text-lg font-semibold">Преимущества блокчейна:</h3>
            <ul className="text-gray-700 list-disc ml-5">
              <li>Безопасность</li>
              <li>Прозрачность</li>
              <li>Снижение расходов</li>
              <li>Скорость</li>
            </ul>
          </section>
        </div>

        <div className="mt-6">
          <Player
            autoplay
            loop
            src="https://lottie.host/09bbeb85-c060-4882-93c2-8f8a381b522f/t3H3CdzSDF.json"
            style={{ height: '300px', width: '300px' }}
          />
        </div>
      </div>

      <footer className="text-center">
        <p className="text-green-500 mt-6">
          © 2024 CryptoInfo. Все права защищены.
        </p>
      </footer> */
}
