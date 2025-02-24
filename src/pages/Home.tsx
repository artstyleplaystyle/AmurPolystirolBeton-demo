import React from 'react';
import { Link } from 'react-router-dom';
import WorkDays from '../components/WorkDays';

const Home: React.FC = () => {
  return (
    <section id="home" className="bg-white py-16 border-b border-gray-200">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="flex flex-col items-center text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Производство полистиролбетона
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Надёжные и экологичные строительные решения для вашего бизнеса и дома
            </p>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              УВАЖАЕМЫЕ ПОКУПАТЕЛИ!
            </h3>
            <div className="text-lg text-gray-600 max-w-2xl space-y-4">
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
              className="mt-6 bg-gray-800 text-white py-2 px-6 text-sm font-semibold rounded-md hover:bg-blue-900 transition-colors"
            >
              Связаться с нами
            </Link>
          </div>
          <div className=''>
            <WorkDays/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;