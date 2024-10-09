import { Title, Text } from '@mantine/core'
import { Player } from '@lottiefiles/react-lottie-player'
import { TypeAnimation } from 'react-type-animation'
import { motion } from 'framer-motion'

import { fadeIn } from '../../animationVariants'

const Second = () => {
  return (
    <div className="flex flex-col h-[calc(100vh-100px)] justify-evenly">
      <div>
        <motion.div
          variants={fadeIn('up', 0.2)}
          initial="hidden"
          whileInView={'show'}
          viewport={{ once: false, amount: 0.6 }}
          className="flex-1 mb-8 xl:mb-0"
        >
          <header className="text-center">
            <Title order={1} className="text-[#FFFFFF] mb-4">
              Crypto Info
            </Title>

            <Text className="text-[#9DA5B2] caption1">
              Будьте в курсе последних новостей и трендов в мире криптовалют
            </Text>
          </header>
        </motion.div>
      </div>

      <div className="w-full flex justify-between items-center">
        <motion.div
          variants={fadeIn('right', 0.2)}
          initial="hidden"
          whileInView={'show'}
          viewport={{ once: false, amount: 0.6 }}
          className="flex-1 mb-8 xl:mb-0"
        >
          <Player
            autoplay
            loop
            src="https://lottie.host/09bbeb85-c060-4882-93c2-8f8a381b522f/t3H3CdzSDF.json"
            style={{ height: '500px', width: '500px' }}
          />
        </motion.div>

        <motion.div
          variants={fadeIn('left', 0.2)}
          initial="hidden"
          whileInView={'show'}
          viewport={{ once: false, amount: 0.6 }}
          className="flex-1 mb-8 xl:mb-0"
        >
          <div className="flex flex-col space-y-6 w-[600px] bg-[#FFFFFF] py-6 px-4 rounded-xl">
            <Title order={3} className="text-center">
              Развитие технологии блокчейн
            </Title>

            <section className="flex flex-col space-y-4 text-center">
              <div>
                <Title order={6} className="text-center mb-2">
                  Что такое блокчейн?
                </Title>
                <Text className="text-[#9DA5B2] bodyLongTextDemibold text-center">
                  Блокчейн — это децентрализованная база данных, которая хранит
                  информацию в виде блоков, связанных друг с другом. Каждый блок
                  содержит данные и уникальный код (хэш), который делает его
                  неизменяемым после создания.
                </Text>
              </div>

              <TypeAnimation
                sequence={[
                  'Преимущества блокчейна: Безопасность',
                  2000,
                  'Преимущества блокчейна: Прозрачность',
                  2000,
                  'Преимущества блокчейна: Снижение расходов',
                  2000,
                  'Преимущества блокчейна: Скорость',
                  2000,
                ]}
                wrapper="span"
                speed={50}
                style={{
                  fontSize: '1.5em',
                  display: 'inline-block',
                  height: '50px',
                }}
                repeat={Infinity}
              />
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Second
