export interface Product {
    title: string;
    pricePerBlock: number;
    blocksPerCubicMeter: number;
    pricePerCubicMeter: number;
    blocksPerPallet: number;
    palletVolume: number;
    palletPrice: number;
  }
  
  export const products: Product[] = [
    { title: 'Блоки 200×300×600 мм', pricePerBlock: 310, blocksPerCubicMeter: 27.77, pricePerCubicMeter: 8500, blocksPerPallet: 32, palletVolume: 1.152, palletPrice: 9920 },
    { title: 'Блоки 400×300×600 мм', pricePerBlock: 620, blocksPerCubicMeter: 13.88, pricePerCubicMeter: 8605.6, blocksPerPallet: 20, palletVolume: 1.44, palletPrice: 12400 },
  ];