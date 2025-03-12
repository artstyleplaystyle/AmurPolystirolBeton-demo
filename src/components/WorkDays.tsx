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
	className="flex justify-between gap-2 bg-steel-green-50 p-4 rounded-xl shadow-md"
	initial={{ opacity: 0, y: 20 }}
	animate={{ opacity: 1, y: 0 }}
	transition={{ duration: 0.5 }}
	>
{/* Виджет дней недели */}
<div className="mt-8 text-xl max-w-md mx-auto">
	<h3 className="text-4xl font-semibold text-secondary mb-4 text-center">
	Режим работы
	</h3>
	<div className="flex justify-between gap-2 bg-steel-green-50 p-4 rounded-xl shadow-md">
	{daysOfWeek.map((day, index) => (
		<div
    key={day.name}
    className={`flex-1 p-2 text-center rounded-md transition-all duration-300 ${
      day.isWorkDay
        ? 'bg-steel-green-200 text-steel-green-800 hover:bg-steel-green-300'
        : 'bg-steel-green-100 text-steel-green-700 hover:bg-steel-green-200'
    } ${index === currentDayIndex ? 'ring-2 ring-primary scale-110' : ''}`}
 		>
    <span className="font-medium">{day.name}</span>
    <p className="text-xs">{day.hours}</p>
  </div>
		))}
		</div>
		<p className="mt-2 text-center text-steel-green-600">
		Рабочие дни: Пн-Пт, 9:00–18:00 | Выходные: Сб-Вс
		</p>
		</div>
		</motion.div>
	)
}

export default WorkDays;