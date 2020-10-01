import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ versionKey: false })
export class Product extends Document {
  @Prop({ type: String, required: true })
  IdProduct: string;

  @Prop({ type: String, required: true, maxlength: 150 })
  NameProduct: string;

  @Prop({
    type: String,
    required: true,
    enum: ['Bebidas', 'Limpieza', 'Botanas', 'Cremeria'],
  })
  Category: string;

  @Prop({ type: String, required: true, maxlength: 450 })
  Description: string;

  @Prop({ type: Number, required: true, min: 0, max: 100 })
  ProductQuantity: number;

  @Prop({ type: Boolean, required: true, enum: [0, 1] })
  Status: boolean;

  @Prop({ type: Number, required: true })
  TimeStamp: number;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
