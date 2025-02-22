import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <section id="home" className="bg-white py-16 border-b border-gray-200">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Производство полистиролбетона
        </h2>
        <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
          Надёжные и экологичные строительные решения для вашего бизнеса и дома
        </p>
        <h3>
          <p className="text-2xl md:text-4xl font-bold text-gray-800 mb-4">УВАЖАЕМЫЕ ПОКУПАТЕЛИ!</p>
          <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto indent-13">В 2025 году планируется увеличение стоимости всей нашей продукции.</p>
          <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto indent-13">Успейте приобрести блоки по текущим ценам, пока они не выросли!</p> 
          <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto indent-13"> Мы понимаем, что это может доставить неудобства, поэтому предлагаем бесплатное хранение до старта сезона строительства.</p>
          <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto indent-13">Если у вас возникнут вопросы о причинах изменения цен или вы захотите уточнить детали, 
          свяжитесь с нашими менеджерами — они подробно проконсультируют вас и ответят на все вопросы!</p>
        </h3>
        <Link
          to="/contacts"
          className="inline-block bg-gray-800 text-white py-2 px-6 text-sm font-semibold rounded-md hover:bg-blue-900 transition-colors"
        >
          Связаться с нами
        </Link>
      </div>
    </section>
  );
};

export default Home;