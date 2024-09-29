import { Player } from '@lottiefiles/react-lottie-player'

const Second = () => {
  return (
    <div className="flex flex-col justify-around items-center h-[calc(100vh-100px)]">
      <header className="text-center">
        <h1 className="text-white mb-6">CryptoInfo</h1>
        <p className="text-gray-400 bodyDemibold">
          Будьте в курсе последних новостей и трендов в мире криптовалют
        </p>
      </header>

      <div className="w-full flex justify-between items-center space-x-8">
        <Player
          autoplay
          loop
          src="https://lottie.host/09bbeb85-c060-4882-93c2-8f8a381b522f/t3H3CdzSDF.json"
          style={{ height: '500px', width: '500px' }}
        />

        <div className="flex flex-col text-center space-y-6 w-[400px] bg-[#FFFFFF] py-6 px-4 rounded-xl">
          <span className="text-[19px] font-bold leading-[22px] tracking-[-0.32px]">
            Развитие технологии блокчейн
          </span>

          <section className="flex flex-col space-y-4">
            <h2 className="text-xl text-center font-semibold">
              Что такое блокчейн?
            </h2>

            <p className="text-gray-700 text-sm">
              Блокчейн — это децентрализованная база данных, которая хранит
              информацию в виде блоков, связанных друг с другом. Каждый блок
              содержит данные и уникальный код (хэш), который делает его
              неизменяемым после создания.
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
      </div>
    </div>
  )
}

export default Second
