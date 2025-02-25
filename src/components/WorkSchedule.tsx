import { useState, useEffect } from 'react';

const daysOfWeek = [
  { name: 'Пн', isWorkDay: true },
  { name: 'Вт', isWorkDay: true },
  { name: 'Ср', isWorkDay: true },
  { name: 'Чт', isWorkDay: true },
  { name: 'Пт', isWorkDay: true },
  { name: 'Сб', isWorkDay: false },
  { name: 'Вс', isWorkDay: false },
];

const getCurrentDayIndex = (date: Date) => {
  const day = date.getDay();
  return day === 0 ? 6 : day - 1; // Смещение: Пн = 0, Вс = 6
};

const WorkSchedule = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  // Обновление даты каждые 24 часа
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDate(new Date());
    }, 24 * 60 * 60 * 1000); // 24 часа в миллисекундах

    return () => clearInterval(interval); // Очистка при размонтировании
  }, []);

  const currentDayIndex = getCurrentDayIndex(currentDate);

  return (
    <div className="mt-8 max-w-md mx-auto">
      <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4 text-center">
        Режим работы
      </h3>
      <div className="flex flex-wrap justify-center gap-1 sm:gap-2 bg-gray-100 p-3 rounded-lg shadow-md">
        {daysOfWeek.map((day, index) => (
          <div
            key={day.name}
            className={`w-9 sm:w-10 p-2 text-center rounded-md transition-all duration-300 text-xs sm:text-sm ${
              day.isWorkDay
                ? 'bg-green-200 text-green-800 hover:bg-green-300'
                : 'bg-red-200 text-red-800 hover:bg-red-300'
            } ${index === currentDayIndex ? 'ring-2 ring-blue-500 scale-105' : ''}`}
          >
            <span className="font-medium">{day.name}</span>
          </div>
        ))}
      </div>
      <p className="mt-2 text-center text-gray-600 text-sm sm:text-base">
        Рабочие дни: Пн-Пт, 9:00–18:00 | Выходные: Сб-Вс
      </p>
    </div>
  );
};

export default WorkSchedule;