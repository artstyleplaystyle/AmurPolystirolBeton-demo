import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <section id="home" className="bg-white py-12 border-b border-gray-200">
      <div className="max-w-[768px] min-w-[320px] mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Производство полистиролбетона
          </h2>
          <p className="text-base sm:text-lg text-gray-600 mb-6">
            Надёжные и экологичные строительные решения для вашего бизнеса и дома
          </p>
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-4">
            УВАЖАЕМЫЕ ПОКУПАТЕЛИ!
          </h3>
          <div className="text-base sm:text-lg text-gray-600 space-y-4">
            <p className="indent-6">
              В 2025 году планируется увеличение стоимости всей нашей продукции.
            </p>
            <p className="indent-6">
              Успейте приобрести блоки по текущим ценам, пока они не выросли!
            </p>
            <p className="indent-6">
              Мы понимаем, что это может доставить неудобства, поэтому предлагаем бесплатное хранение до старта сезона строительства.
            </p>
            <p className="indent-6">
              Если у вас возникнут вопросы о причинах изменения цен или вы захотите уточнить детали, свяжитесь с нами — мы подробно проконсультируем вас и ответим на все вопросы!
            </p>
          </div>
          <Link
            to="/contacts"
            className="mt-6 bg-gray-800 text-white py-3 px-8 text-base font-semibold rounded-md hover:bg-blue-900 transition-colors"
          >
            Связаться с нами
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Home;