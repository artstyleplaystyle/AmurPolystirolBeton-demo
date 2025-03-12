import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const location = useLocation();
  const [isCollapsed, setIsCollapsed] = useState(false);

  const navItems = [
    { path: '/', label: 'Главная' },
    { path: '/products', label: 'Продукция' },
    { path: '/about', label: 'О нас' },
    { path: '/contacts', label: 'Контакты' },
    { path: '/calculator', label: 'Калькулятор' },
  ];

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className="relative">
      <button
        className="fixed top-4 left-4 z-50 md:hidden bg-primary text-neutral-100 p-2 rounded-md"
        onClick={toggleSidebar}
      >
        {isCollapsed ? '☰' : '✕'}
      </button>

      <aside
        className={`${
          isCollapsed ? '-translate-x-full' : 'translate-x-0'
        } fixed top-0 left-0 h-full bg-primary border-r border-neutral-400 transition-transform duration-300 ease-in-out z-40 md:translate-x-0 md:w-70 shadow-md`}
      >
        <div className="flex flex-col h-full">
          <div className="p-6 bg-primary">
            <Link to="/" className="block">
              <h1 className="text-lg font-bold text-neutral-100 truncate">
                Амур Полистирол Бетон
              </h1>
            </Link>
          </div>

          <nav className="flex-grow p-4">
            <ul className="space-y-1">
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className={`flex items-center p-3 rounded-md transition-colors ${
                      location.pathname === item.path
                        ? 'bg-accent text-neutral-900 font-medium'
                        : 'text-neutral-100 hover:bg-neutral-800'
                    }`}
                    onClick={() => setIsCollapsed(true)}
                  >
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="p-4 border-t border-neutral-400 text-xs text-neutral-100">
            <p>© 2025 Амур Полистирол Бетон</p>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar; 