import { SimpleGrid } from '@mantine/core';

export default function Seventh() {
  return (
    <div className="relative h-screen flex flex-col items-center justify-center">
      <header className="text-center mb-8">
        <h1 className="text-white text-3xl">Будущее токенизации</h1>
      </header>
      <SimpleGrid cols={3} verticalSpacing="sm">
      
        <div className="bg-white text-black p-4 rounded-lg shadow-lg mt-12"> 
          <h2 className="text-xl text-center font-semibold">120 миллиардов долларов</h2>
          <p className="text-gray-700 text-sm">
            В настоящее время в обращении находится около 120 миллиардов долларов токенизированных денег, и многие компании, предоставляющие финансовые услуги, значительно расширили свои команды и возможности в области цифровых активов.
          </p>
        </div>
        
        <div className="bg-white text-black p-4 rounded-lg shadow-lg mt-6"> 
          <h2 className="text-xl text-center font-semibold">Рост в 80 раз</h2>
          <p className="text-gray-700 text-sm">
            Ожидается, что токенизация вырастет в 80 раз на частных рынках и достигнет почти 4 триллионов долларов США к 2030 году.
          </p>
        </div>
        
        <div className="bg-white text-black p-4 rounded-lg shadow-lg">
          <h2 className="text-xl text-center font-semibold">4-5 триллионов долларов</h2>
          <p className="text-gray-700 text-sm">
            Аналитики прогнозируют, что к 2030 году может быть выпущено токенизированных цифровых ценных бумаг на сумму от 4 до 5 триллионов долларов США.
          </p>
        </div>
      </SimpleGrid>
          <p className="text-white text-lg">
            В настоящее время в обращении находится около 120 миллиардов долларов токенизированных денег, и многие компании, предоставляющие финансовые услуги, значительно расширили свои команды и возможности в области цифровых активов.
          </p>
    </div>
  );
}
