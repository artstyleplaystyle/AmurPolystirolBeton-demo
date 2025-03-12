import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Header = () => {
  return (
    <header className="bg-secondary text-white p-4 shadow-md ml-0 md:ml-64">
      <div className="container mx-auto flex justify-between items-center">
        <motion.h1
          className="text-xl md:text-2xl font-semibold tracking-tight"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link to="/" className="hover:text-accent transition-colors">
            Амур Полистирол Бетон
          </Link>
        </motion.h1>
      </div>
    </header>
  );
};

export default Header;