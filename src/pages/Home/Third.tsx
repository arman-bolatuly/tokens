import { SimpleGrid, Button } from "@mantine/core";

const Third = () => {
  return (
    <div className="relative h-screen flex flex-col items-center justify-center">
      <header className="text-center mb-8">
        <h1 className="text-white text-3xl">Простые шаги для токенизации</h1>
      </header>
      <SimpleGrid cols={3} verticalSpacing="sm">
        {/* Левый контейнер (Зарегистрироваться) */}
        <div className="bg-white text-black p-6 rounded-lg mx-4 my-4 w-80 shadow-lg mt-20">
          <h2 className="text-xl text-center font-semibold">Зарегистрироваться</h2>
          <p className="text-gray-700 text-sm">
            Зарегистрируйтесь и начните свой путь к успеху.
          </p>
          <Button variant="default" className="bg-white text-black p-2 mt-4 rounded-lg w-full">
            Как это работает
          </Button>
        </div>
        {/* Центральный контейнер (Создание цифровых активов) */}
        <div className="bg-white text-black p-6 rounded-lg mx-4 my-4 w-80 shadow-lg mt-16">
          <h2 className="text-xl text-center font-semibold">
            Создание цифровых активов
          </h2>
          <p className="text-gray-700 text-sm">
            Попрощайтесь со сложным кодированием и техническими барьерами.
          </p>
          <Button variant="default" className="bg-white text-black p-2 mt-4 rounded-lg w-full">
            Как это работает
          </Button>
        </div>
        {/* Правый контейнер (Сбор средств) */}
        <div className="bg-white text-black p-6 rounded-lg mx-4 my-4 w-80 shadow-lg">
          <h2 className="text-xl text-center font-semibold">Сбор средств</h2>
          <p className="text-gray-700 text-sm">
            Охватите мировое сообщество инвесторов.
          </p>
          <Button variant="default" className="bg-white text-black p-2 mt-4 rounded-lg w-full">
            Как это работает
          </Button>
        </div>
      </SimpleGrid>
    </div>
  );
};

export default Third;
