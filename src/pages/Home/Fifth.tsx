import { Player } from '@lottiefiles/react-lottie-player';

const Tokenization = () => {
  return (
    <div className="flex flex-col justify-around items-center h-[calc(100vh-100px)]">
      <header className="text-center">
        <h1 className="text-white mb-6">Токенизация</h1>
        <p className="text-gray-400 bodyDemibold">
          Узнайте, как токенизация меняет рынок активов.
        </p>
      </header>

      <div className="w-full flex justify-between items-center space-x-8">
        <Player
          autoplay
          loop
          src="https://lottie.host/0b43592b-7f4e-4efb-99f5-2b2641fb1466/Oh6p1tlkZu.json" 
          style={{ height: '500px', width: '500px' }}
        />

        <div className="flex flex-col text-center space-y-6 w-[400px] bg-[#FFFFFF] py-6 px-4 rounded-xl">
          <span className="text-[19px] font-bold leading-[22px] tracking-[-0.32px]">
            Что такое токенизация?
          </span>

          <section className="flex flex-col space-y-4">
            <h2 className="text-xl text-center font-semibold">
              Основные аспекты токенизации
            </h2>

            <p className="text-gray-700 text-sm">
              Проще говоря, токенизация — это процесс выпуска цифрового представления актива на блокчейне. 
              Он включает в себя преобразование права собственности на актив, например, на произведение искусства, 
              товар или акции компании, в цифровой токен, хранящийся на блокчейне. Токен представляет актив и 
              используется для отслеживания и передачи права собственности на этот актив.
            </p>

            <p className="text-gray-700 text-sm">
              Токенизация также обеспечивает доступ к совершенно новым финансовым рынкам, позволяя активам, 
              которые исторически были разрознены в разрозненных средах, существовать в общем пространстве.
            </p>

            <p className="text-gray-700 text-sm">
              В конечном итоге токенизация направлена на обеспечение эффективности, ликвидности и доступности 
              традиционных, ранее неликвидных рынков.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Tokenization;
