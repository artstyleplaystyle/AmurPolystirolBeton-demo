import React from 'react';
import { motion } from 'framer-motion';

const WorkDays: React.FC = () => {
const daysOfWeek = [
    { name: 'Пн', isWorkDay: true, hours: '9:00–18:00' },
    { name: 'Вт', isWorkDay: true, hours: '9:00–18:00' },
    { name: 'Ср', isWorkDay: true, hours: '9:00–18:00' },
    { name: 'Чт', isWorkDay: true, hours: '9:00–18:00' },
    { name: 'Пт', isWorkDay: true, hours: '9:00–18:00' },
    { name: 'Сб', isWorkDay: false, hours: 'Выходной' },
    { name: 'Вс', isWorkDay: false, hours: 'Выходной' },
  ];

  // Текущий день (0 = воскресенье, 6 = суббота)
const today = new Date('2025-02-23').getDay(); // 23 февраля 2025 — воскресенье (0)
const currentDayIndex = today === 0 ? 6 : today - 1; // Корректировка под массив (0 = Пн, 6 = Вс)

return(
	<motion.div
	className="flex justify-between gap-2 bg-gray-100 p-4 rounded-xl shadow-md"
	initial={{ opacity: 0, y: 20 }}
	animate={{ opacity: 1, y: 0 }}
	transition={{ duration: 0.5 }}
	>
{/* Виджет дней недели */}
<div className="mt-8 text-xl max-w-md mx-auto">
	<h3 className="text-4xl font-semibold text-gray-800 mb-4 text-center">
	Режим работы
	</h3>
	<div className="flex justify-between gap-2 bg-gray-100 p-4 rounded-xl shadow-md">
	{daysOfWeek.map((day, index) => (
		<div
    key={day.name}
    className={`flex-1 p-2 text-center rounded-md transition-all duration-300 ${
      day.isWorkDay
        ? 'bg-white-100 text-black-800 hover:bg-blue-300'
        : 'bg-gray-200 text-red-800 hover:bg-red-300'
    } ${index === currentDayIndex ? 'ring-2 ring-black-500 scale-110' : ''}`}
 		>
    <span className="font-medium">{day.name}</span>
    <p className="text-xs">{day.hours}</p>
  </div>
		))}
		</div>
		<p className="mt-2 text-center text-gray-600">
		Рабочие дни: Пн-Пт, 9:00–18:00 | Выходные: Сб-Вс
		</p>
		</div>
		</motion.div>
	)
}

export default WorkDays;