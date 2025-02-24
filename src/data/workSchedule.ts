export interface Day {
    name: string;
    isWorkDay: boolean;
  }
  
  export const daysOfWeek: Day[] = [
    { name: 'Пн', isWorkDay: true },
    { name: 'Вт', isWorkDay: true },
    { name: 'Ср', isWorkDay: true },
    { name: 'Чт', isWorkDay: true },
    { name: 'Пт', isWorkDay: true },
    { name: 'Сб', isWorkDay: false },
    { name: 'Вс', isWorkDay: false },
  ];