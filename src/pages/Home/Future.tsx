import { SimpleGrid, Title, Text } from '@mantine/core'
import { motion } from 'framer-motion'
import CountUp from 'react-countup'

import { fadeIn } from '../../animationVariants'

export default function Future() {
  return (
    <div className="h-screen flex flex-col justify-evenly" id="future">
      <div>
        <motion.div
          variants={fadeIn('up', 0.2)}
          initial="hidden"
          whileInView={'show'}
          viewport={{ once: false, amount: 0.6 }}
        >
          <header className="text-center">
            <Title order={1} className="text-[#FFFFFF] mb-4">
              Будущее токенизации
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
          <div className="bg-white p-6 rounded-lg text-center flex flex-col">
            <Title order={3} className="text-center mb-6">
              <CountUp end={120} duration={3} delay={1} /> триллионов $
            </Title>


            <Text className="text-[#9DA5B2] bodyLongTextDemibold text-center"
             >
                В настоящее время в обращении находится около 120 миллиардов
                долларов токенизированных денег, и многие компании,
                предоставляющие финансовые услуги, значительно расширили свои
                команды и возможности в области цифровых активов.
            </Text>
          </div>
        </motion.div>

        <motion.div
          variants={fadeIn('right', 0.4)}
          initial="hidden"
          whileInView={'show'}
          viewport={{ once: false, amount: 0.6 }}
        >
          <div className="bg-white p-6 rounded-lg text-center flex flex-col space-y-6">
            <Title order={3} className="text-center">
              Рост x<CountUp end={80} duration={3} delay={1} />
            </Title>


            <Text className="text-[#9DA5B2] bodyLongTextDemibold text-center"
             >
                Ожидается, что токенизация вырастет в 80 раз на частных рынках и
                достигнет почти 4 триллионов долларов США к 2030 году.
            </Text>
          </div>
        </motion.div>

        <motion.div
          variants={fadeIn('right', 0.2)}
          initial="hidden"
          whileInView={'show'}
          viewport={{ once: false, amount: 0.6 }}
        >
          <div className="bg-white p-6 rounded-lg text-center flex flex-col">
            <Title order={3} className="text-center mb-6">
              {/* 4-5 триллионов долларов */}
              <CountUp end={5} duration={3} delay={1} /> триллионов $
            </Title>


            <Text className="text-[#9DA5B2] bodyLongTextDemibold text-center"
             >
                Аналитики прогнозируют, что к 2030 году может быть выпущено
                токенизированных цифровых ценных бумаг на сумму от 4 до 5
                триллионов долларов США.
            </Text>
          </div>
        </motion.div>
      </SimpleGrid>
    </div>
  )
}
