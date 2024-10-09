import { SimpleGrid, Button, Title, Text } from '@mantine/core'
import { motion } from 'framer-motion'

import { fadeIn } from '../../animationVariants'
import { Player } from '@lottiefiles/react-lottie-player'

const Fourth = () => {
  return (
    <div className="h-[calc(100vh-100px)] flex flex-col justify-evenly">
      <div>
        <motion.div
          variants={fadeIn('up', 0.2)}
          initial="hidden"
          whileInView={'show'}
          viewport={{ once: false, amount: 0.6 }}
        >
          <header className="text-center">
            <Title order={1} className="text-[#FFFFFF] mb-4">
              Что можно токенизировать?
            </Title>

            <Text className="text-[#9DA5B2] caption1">
              Будьте в курсе последних новостей и трендов в мире криптовалют
            </Text>
          </header>
        </motion.div>
      </div>

      <SimpleGrid cols={3} spacing="xl">
        <motion.div
          variants={fadeIn('right', 0.6)}
          initial="hidden"
          whileInView={'show'}
          viewport={{ once: false, amount: 0.6 }}
        >
          <div>
            <div className="bg-white p-6 rounded-lg text-center flex flex-col">
              <Title order={3} className="text-center mb-6">
                Токенизация недвижимости
              </Title>

              <Player
                autoplay
                loop
                src="https://lottie.host/10dcd756-eea3-4a4b-b440-9c3f406517dd/olTs8o9nFu.json"
                style={{ height: '150px', width: '150px' }}
              />

              <Text className="text-[#9DA5B2] bodyLongTextDemibold mt-6 mb-12">
                Управление недвижимостью, продажа недвижимости, освоение
                земельных участков, гостиничный бизнес, строительство или любая
                другая вертикаль.
              </Text>
              <Button variant="default">Узнать больше</Button>
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={fadeIn('right', 0.4)}
          initial="hidden"
          whileInView={'show'}
          viewport={{ once: false, amount: 0.6 }}
        >
          <div>
            <div className="bg-white p-6 rounded-lg text-center flex flex-col space-y-6">
              <Title order={3} className="text-center">
                Токенизация стартапов
              </Title>

              <Player
                autoplay
                loop
                src="https://lottie.host/b4016b15-3b60-455e-b6c8-8aef0b7d5b91/jakTIItltn.json"
                style={{ height: '150px', width: '150px' }}
              />

              <Text className="text-[#9DA5B2] bodyLongTextDemibold">
                Программное обеспечение как услуга, электронная коммерция,
                технологии, здравоохранение, Web3, торговые площадки,
                возобновляемая энергетика или любая другая вертикаль.
              </Text>
              <Button variant="default">Узнать больше</Button>
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={fadeIn('right', 0.2)}
          initial="hidden"
          whileInView={'show'}
          viewport={{ once: false, amount: 0.6 }}
        >
          <div>
            <div className="bg-white p-6 rounded-lg text-center flex flex-col">
              <Title order={3} className="text-center mb-6">
                Токенизация франшизы
              </Title>

              <Player
                autoplay
                loop
                src="https://lottie.host/a4914292-f666-4af6-a2c6-119d8aba1b8a/R3UdrrgYdv.json"
                style={{ height: '150px', width: '150px' }}
              />

              <Text className="text-[#9DA5B2] bodyLongTextDemibold mt-6 mb-12">
                Рестораны, отели, спортзалы, супермаркеты, магазины или любые
                другие франшизы, которые вы только можете себе представить,
                могут быть токенизированы.
              </Text>

              <Button variant="default" className="mt-auto">
                Узнать больше
              </Button>
            </div>
          </div>
        </motion.div>
      </SimpleGrid>
    </div>
  )
}

export default Fourth
