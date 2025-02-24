import React from 'react';
import { daysOfWeek, Day } from '../data/workSchedule';

interface WorkScheduleProps {
  date?: Date; // Опциональная дата для текущего дня
}

const getCurrentDayIndex = (date: Date) => {
  const day = date.getDay();
  return day === 0 ? 6 : day - 1;
};

const WorkSchedule = ({ date = new Date('2025-02-23') }: WorkScheduleProps) => {
  const currentDayIndex = getCurrentDayIndex(date);

  return (
    <div className="mt-8 max-w-md mx-auto">
      <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4 text-center">
        Режим работы
      </h3>
      <div className="flex flex-wrap justify-center gap-1 sm:gap-2 bg-gray-100 p-3 rounded-lg shadow-md">
        {daysOfWeek.map((day: Day, index: number) => (
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