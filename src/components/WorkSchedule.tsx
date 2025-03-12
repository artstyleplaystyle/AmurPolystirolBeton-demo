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
  return day === 0 ? 6 : day - 1;
};

const WorkSchedule = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDate(new Date());
    }, 24 * 60 * 60 * 1000);

    return () => clearInterval(interval); 
  }, []);

  const currentDayIndex = getCurrentDayIndex(currentDate);

  const formattedDate = new Intl.DateTimeFormat('ru-RU', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  }).format(currentDate);

  return (
    <div className="h-full w-full bg-neutral-50 p-6 rounded-lg shadow-md border border-neutral-300 flex flex-col">
      <h3 className="text-2xl font-semibold text-primary mb-4 text-center">
        Режим работы
      </h3>
      
      <p className="text-center text-primary mb-4">
        Сегодня: <span className="font-bold">{formattedDate}</span>
      </p>
      
      <div className="flex justify-between gap-1 bg-neutral-300 p-3 rounded-lg shadow-sm border border-neutral-300 mb-4">
        {daysOfWeek.map((day, index) => (
          <div
            key={day.name}
            className={`flex-1 py-2 text-center rounded-md transition-all duration-300
            ${
              day.isWorkDay
                ? 'bg-gold-400 text-neutral-800 font-medium hover:bg-gold-500'
                : 'bg-neutral-600 text-neutral-100 hover:bg-neutral-600'
            } ${index === currentDayIndex ? 'ring-1 ring-primary' : ''}`}
          >
            <span className="text-sm sm:text-base">{day.name}</span>
          </div>
        ))}
      </div>
      
      <div className="space-y-3 mb-4 flex-grow">
        <div className="flex justify-between items-center bg-neutral-100 p-3 rounded">
          <span className="text-primary font-medium">Рабочие дни:</span>
          <span className="text-primary">Пн–Пт</span>
        </div>
        <div className="flex justify-between items-center bg-neutral-100 p-3 rounded">
          <span className="text-primary font-medium">Часы работы:</span>
          <span className="text-primary">9:00–18:00</span>
        </div>
        <div className="flex justify-between items-center bg-neutral-100 p-3 rounded">
          <span className="text-primary font-medium">Выходные:</span>
          <span className="text-primary">Сб–Вс</span>
        </div>
      </div>
      
      <p className="text-center text-neutral-600 text-sm italic mt-auto">
        Пожалуйста, учитывайте наш график работы при планировании визита
      </p>
    </div>
  );
};

export default WorkSchedule;