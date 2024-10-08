import { SimpleGrid, Button } from "@mantine/core";

const Fourth = () => {
  return (
    <>
      <header className="text-center mb-8">
        <h1 className="text-white text-3xl">Что можно токенизировать</h1>
      </header>
      <SimpleGrid cols={3} verticalSpacing="sm">
        {/* Left container (Токенизация недвижимости) */}
        <div className="bg-white text-black p-4 rounded-lg shadow-lg">
          <h2 className="text-xl text-center font-semibold">Токенизация недвижимости</h2>
          <p className="text-gray-700 text-sm">
            Управление недвижимостью, продажа недвижимости, освоение земельных участков, гостиничный бизнес, строительство или любая другая вертикаль.
          </p>
          <Button variant="default" className="bg-white text-black p-2 mt-4 rounded-lg w-full">
            Узнать больше.
          </Button>
        </div>
        
        <div className="bg-white text-black p-4 rounded-lg shadow-lg mt-6"> 
          <h2 className="text-xl text-center font-semibold">Токенизация стартапов</h2>
          <p className="text-gray-700 text-sm">
            Программное обеспечение как услуга, электронная коммерция, технологии, здравоохранение, Web3, торговые площадки, возобновляемая энергетика или любая другая вертикаль.
          </p>
          <Button variant="default" className="bg-white text-black p-2 mt-4 rounded-lg w-full">
            Узнать больше.
          </Button>
        </div>
        
        <div className="bg-white text-black p-4 rounded-lg shadow-lg mt-12"> {/* 48px down */}
          <h2 className="text-xl text-center font-semibold">Токенизация франшизы</h2>
          <p className="text-gray-700 text-sm">
            Рестораны, отели, спортзалы, супермаркеты, магазины или любые другие франшизы, которые вы только можете себе представить, могут быть токенизированы.
          </p>
          <Button variant="default" className="bg-white text-black p-2 mt-4 rounded-lg w-full">
            Узнать больше.
          </Button>
        </div>
      </SimpleGrid>
    </>
  );
};

export default Fourth;
