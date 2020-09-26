import { ApiProperty } from '@nestjs/swagger';
import { v4 as uuid } from 'uuid';
import {
  ProductCategories,
  ProductQuantities,
  ProductStatus,
} from '../classes/combos.class';

export class CreateProductDto {
  @ApiProperty({
    type: String,
    description: 'Id del producto',
    example: uuid(),
  })
  IdProduct: string;

  @ApiProperty({
    type: String,
    description: 'Nombre del producto',
    example: 'Producto 1',
  })
  readonly NameProduct: string;

  @ApiProperty({
    type: String,
    description: 'Categoría del producto',
    enum: ProductCategories,
    default: 'Bebidas',
  })
  readonly Category: string;

  @ApiProperty({
    type: String,
    description: 'Descripción del producto',
    example: 'Generado desde la API',
  })
  readonly Description: string;

  @ApiProperty({
    type: Number,
    description: 'Cantidad de producto',
    minimum: 1,
    maximum: 100,
    enum: ProductQuantities,
    default: 1,
  })
  readonly ProductQuantity: number;

  @ApiProperty({
    type: Boolean,
    description: 'Estatus del producto',
    enum: ProductStatus,
    default: true,
  })
  readonly Status: boolean;

  @ApiProperty({
    type: Number,
    description: 'Fecha y hora de creación',
    example: Math.floor(new Date().getTime() / 1000),
  })
  TimeStamp: number;
}
