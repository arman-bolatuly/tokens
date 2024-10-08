import { SimpleGrid } from '@mantine/core';

export default function Sixth() {
  return (
    <div className="relative h-screen flex flex-col items-center justify-center">
      <header className="text-center mb-8">
        <h1 className="text-white text-3xl">Преимущества токенизированных RWA</h1>
      </header>
      <SimpleGrid cols={3} verticalSpacing="sm">
        {/* Контейнер 1 (Улучшенная ликвидность) */}
        <div className="bg-white text-black p-4 rounded-lg shadow-lg">
          <h2 className="text-xl text-center font-semibold">Улучшенная ликвидность</h2>
          <p className="text-gray-700 text-sm">
            Традиционные реальные активы, такие как недвижимость или предметы искусства, часто не обладают ликвидностью. Токенизация обеспечивает дробное владение, позволяя инвесторам покупать и продавать цифровые токены, что повышает доступность и ликвидность активов.
          </p>
        </div>
        
        {/* Контейнер 2 (Доступность и инклюзивность) */}
        <div className="bg-white text-black p-4 rounded-lg shadow-lg mt-6"> 
          <h2 className="text-xl text-center font-semibold">Доступность и инклюзивность</h2>
          <p className="text-gray-700 text-sm">
            Токенизация RWA демократизирует доступ к инвестиционным возможностям, устраняя барьеры для входа. Это позволяет более широкому кругу инвесторов участвовать в классах активов, которые ранее были доступны только состоятельным частным лицам или учреждениям.
          </p>
        </div>
        
        {/* Контейнер 3 (Прозрачность и доверие) */}
        <div className="bg-white text-black p-4 rounded-lg shadow-lg mt-12">
          <h2 className="text-xl text-center font-semibold">Прозрачность и доверие</h2>
          <p className="text-gray-700 text-sm">
            Блокчейны обеспечивают безопасность и прозрачность. Подделка данных блокчейна невероятно сложна, и инвесторы получают полную прозрачность прошлых транзакций, а также неоспоримое доказательство права собственности.
          </p>
        </div>
      </SimpleGrid>
    </div>
  );
}
