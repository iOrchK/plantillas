export enum ProductCategories {
  Bebidas = 'Bebidas',
  Limpieza = 'Limpieza',
  Botanas = 'Botanas',
  Cremeria = 'Cremeria',
}

export const ProductQuantities = Array.from({ length: 100 }, (_, i) => i + 1);

export enum ProductStatus {
  true,
  false,
}
