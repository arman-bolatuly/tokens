import { Player } from '@lottiefiles/react-lottie-player';

const Home = () => {
  return (
    <div className="flex flex-col items-center h-screen p-10 bg-[#0d1726] space-y-10">
      <header className="text-center">
        <h1 className="text-white text-4xl font-bold mb-6">CryptoInfo</h1>
        <p className="text-gray-400 text-lg">Будьте в курсе последних новостей и трендов в мире криптовалют</p>
      </header>

      <div className="flex justify-between items-start space-x-8">
        <div className="flex flex-col space-y-6 w-[400px] bg-[#FFFFFF] py-6 px-4 rounded-xl">
          <div className="text-center">
            <span className="text-[19px] font-bold leading-[22px] tracking-[-0.32px]">
              Популярные криптовалюты
            </span>
          </div>

          <section className="flex flex-col space-y-4">
            <h2 className="text-xl text-center font-semibold">Что такое криптовалюта?</h2>
            <p className="text-gray-700 text-sm">
              Криптовалюта — это вид цифровой или виртуальной валюты, который использует криптографию для обеспечения безопасности.
              Она работает в децентрализованных сетях, использующих технологию блокчейн.
            </p>

            <h3 className="text-lg font-semibold">Топ криптовалют:</h3>
            <ul className="text-gray-700 list-disc ml-5">
              <li>Биткоин (BTC)</li>
              <li>Эфириум (ETH)</li>
              <li>Рипл (XRP)</li>
              <li>Лайткоин (LTC)</li>
              <li>Кардано (ADA)</li>
            </ul>
          </section>
        </div>

        <div className="mt-6">
          <Player
            autoplay
            loop
            src="https://lottie.host/13a2bcf1-c1e6-41d0-8b27-de37405dd3b1/awBQyEEOl4.json"
            style={{ height: '300px', width: '300px' }}
          />
        </div>
      </div>

      <div className="flex flex-row-reverse justify-between items-start space-x-8 space-x-reverse">
        <div className="flex flex-col space-y-6 w-[400px] bg-[#FFFFFF] py-6 px-4 rounded-xl">
          <div className="text-center">
            <span className="text-[19px] font-bold leading-[22px] tracking-[-0.32px]">
              Развитие технологии блокчейн
            </span>
          </div>

          <section className="flex flex-col space-y-4">
            <h2 className="text-xl text-center font-semibold">Что такое блокчейн?</h2>
            <p className="text-gray-700 text-sm">
              Блокчейн — это децентрализованная база данных, которая хранит информацию в виде блоков, связанных друг с другом.
              Каждый блок содержит данные и уникальный код (хэш), который делает его неизменяемым после создания.
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
        <p className="text-green-500 mt-6">© 2024 CryptoInfo. Все права защищены.</p>
      </footer>
    </div>
  );
};

export default Home;
