import { SimpleGrid, Title, Text } from '@mantine/core'
import { motion } from 'framer-motion'

import { fadeIn } from '../../animationVariants'

const Tokenize = () => {
  return (
    <div className="h-screen flex flex-col justify-evenly" id="tokenize1">
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
            <Title order={3} className="text-center">
                Токенизация стартапов
              </Title>


              <Text className="text-[#9DA5B2] bodyLongTextDemibold"
              >
                  Программное обеспечение как услуга, электронная коммерция,
                  технологии, здравоохранение, Web3, торговые площадки,
                  возобновляемая энергетика или любая другая вертикаль.
              </Text>
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
            <Title order={3} className="text-center mb-6">
                Токенизация недвижимости
              </Title>


              <Text className="text-[#9DA5B2] bodyLongTextDemibold"
              >
                  Управление недвижимостью, продажа недвижимости, освоение
                  земельных участков, гостиничный бизнес, строительство или любая
                  другая вертикаль.
              </Text>
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

              <Text className="text-[#9DA5B2] bodyLongTextDemibold"
              >
                  Рестораны, отели, спортзалы, супермаркеты, магазины или любые
                  другие франшизы, которые вы только можете себе представить,
                  могут быть токенизированы.
              </Text>

            </div>
          </div>
        </motion.div>
      </SimpleGrid>
    </div>
  )
}

export default Tokenize
