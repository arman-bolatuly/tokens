import { Player } from '@lottiefiles/react-lottie-player'

const First = () => {
  return (
    <div className="flex flex-col justify-around items-center h-[calc(100vh-100px)]">
      <header className="text-center">
        <h1 className="text-white mb-6">CryptoInfo</h1>
        <p className="text-gray-400 bodyDemibold">
          Будьте в курсе последних новостей и трендов в мире криптовалют
        </p>
      </header>

      <div className="w-full flex justify-between items-center space-x-8">
        <div className="flex flex-col space-y-6 w-[400px] bg-[#FFFFFF] py-6 px-4 rounded-xl">
          <div className="text-center">
            <span className="text-[19px] font-bold leading-[22px] tracking-[-0.32px]">
              Популярные криптовалюты
            </span>
          </div>

          <section className="flex flex-col space-y-4">
            <h2 className="text-xl text-center font-semibold">
              Что такое криптовалюта?
            </h2>
            <p className="text-gray-700 text-sm">
              Криптовалюта — это вид цифровой или виртуальной валюты, который
              использует криптографию для обеспечения безопасности. Она работает
              в децентрализованных сетях, использующих технологию блокчейн.
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

        <Player
          autoplay
          loop
          src="https://lottie.host/13a2bcf1-c1e6-41d0-8b27-de37405dd3b1/awBQyEEOl4.json"
          style={{ height: '500px', width: '500px' }}
        />
      </div>
    </div>
  )
}

export default First
