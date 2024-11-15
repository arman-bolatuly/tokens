import { SimpleGrid, Title, Text } from '@mantine/core'
import { motion } from 'framer-motion'

import { fadeIn } from '../../animationVariants'

export default function RWA() {
  return (
    <div className="h-screen flex flex-col justify-evenly" id="RWA">
      <div>
        <motion.div
          variants={fadeIn('up', 0.2)}
          initial="hidden"
          whileInView={'show'}
          viewport={{ once: false, amount: 0.6 }}
        >
          <header className="text-center">
            <Title order={1} className="text-[#FFFFFF] mb-4">
              Преимущества токенизированных RWA
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
              Улучшенная ликвидность
            </Title>


            <Text className="text-[#9DA5B2] bodyLongTextDemibold"
            >
                 Традиционные реальные активы, такие как недвижимость или предметы
                 искусства, часто не обладают ликвидностью. Токенизация
                 обеспечивает дробное владение, позволяя инвесторам покупать и
                 продавать цифровые токены, что повышает доступность и ликвидность
                 активов.              
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
              Прозрачность и доверие
            </Title>


            <Text className="text-[#9DA5B2] bodyLongTextDemibold"
             >
                Блокчейны обеспечивают безопасность и прозрачность. Подделка
                данных блокчейна невероятно сложна, и инвесторы получают полную
                прозрачность прошлых транзакций, а также неоспоримое
                доказательство права собственности.
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
              Доступность и инклюзивность
            </Title>
            
            <Text className="text-[#9DA5B2] bodyLongTextDemibold"
            >
                Токенизация RWA демократизирует доступ к инвестиционным
                возможностям, устраняя барьеры для входа. Это позволяет более
                широкому кругу инвесторов участвовать в классах активов, которые
                ранее были доступны только состоятельным частным лицам или
                учреждениям.              
            </Text>
            
          </div>
        </motion.div>
      </SimpleGrid>
    </div>
  )
}
