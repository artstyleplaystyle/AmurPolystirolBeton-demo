export interface Product {
    title: string;
    pricePerBlock: number;
    size: string;
    density: string;
    blocksPerPallet: number;
    blocksPerCubicMeter: number;
    type: string;
    pricePerCubicMeter: number;
    palletVolume: number;
    palletPrice: number;
    image?: string;
  }
  
  export const products: Product[] = [
    { title: 'Блоки 200×300×600 мм', pricePerBlock: 310, size: '20 x 30 x 60', density: 'D600 (600 кг/м³)', blocksPerPallet: 32, blocksPerCubicMeter: 27.77, type: 'Стеновой (несущий)', pricePerCubicMeter: 8500, palletVolume: 1.152, palletPrice: 9920, image: '/images/block1.jpg' },
    { title: 'Блоки 400×300×600 мм', pricePerBlock: 620, size: '40 x 30 x 60', density: 'D600 (600 кг/м³)', blocksPerPallet: 20, blocksPerCubicMeter: 13.88, type: 'Стеновой (несущий)', pricePerCubicMeter: 8605.6, palletVolume: 1.44, palletPrice: 12400, image: '/images/block2.jpg' },
  ];