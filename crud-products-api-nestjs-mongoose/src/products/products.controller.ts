import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Delete,
  Res,
  HttpStatus,
  Param,
} from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { ProductsService } from './products.service';
import { v4 as uuid } from 'uuid';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiParam,
  ApiQuery,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { Product } from './classes/product.class';
import { Response } from 'express';

@ApiBearerAuth()
@ApiTags('products')
@Controller('products')
export class ProductsController {
  constructor(private service: ProductsService) {}

  @Get(':id')
  @ApiOperation({ summary: 'Get product by id' })
  @ApiResponse({
    status: 200,
    description: 'The found record',
    type: Product,
  })
  @ApiResponse({ status: 500, description: 'Internal Server Error' })
  @ApiParam({ name: 'id' })
  findById(@Res() response: Response, @Param('id') itemId: string) {
    this.service
      .findById(itemId)
      .then(result => {
        response.status(HttpStatus.OK).json(result);
      })
      .catch(error => {
        response.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
          message:
            'A ocurrido un error inesperado. Favor de contactar al administrador del sistema.',
          detail: error,
        });
      });
  }

  @Get()
  @ApiOperation({ summary: 'Get all products' })
  @ApiResponse({
    status: 200,
    description: 'The found records',
    type: [Product],
  })
  @ApiResponse({ status: 500, description: 'Internal Server Error' })
  findAll(@Res() response: Response) {
    this.service
      .findAll()
      .then(result => {
        response.status(HttpStatus.OK).json(result);
      })
      .catch(error => {
        response.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
          message:
            'A ocurrido un error inesperado. Favor de contactar al administrador del sistema.',
          detail: error,
        });
      });
  }

  @Post()
  @ApiOperation({ summary: 'Create product' })
  @ApiResponse({
    status: 201,
    description: 'The created record',
    type: Product,
  })
  @ApiResponse({ status: 500, description: 'Internal Server Error' })
  create(@Body() item: CreateProductDto, @Res() response: Response) {
    item.IdProduct = uuid();
    item.TimeStamp = Math.floor(new Date().getTime() / 1000);
    this.service
      .create(item)
      .then(result => {
        response.status(HttpStatus.CREATED).json(result);
      })
      .catch(error => {
        console.log(error);
        response.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
          message:
            'A ocurrido un error inesperado. Favor de contactar al administrador del sistema.',
          detail: error,
        });
      });
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update product by id' })
  @ApiResponse({
    status: 200,
    description: 'The updated record',
    type: Product,
  })
  @ApiResponse({ status: 500, description: 'Internal Server Error' })
  @ApiParam({ name: 'id' })
  update(
    @Body() item: CreateProductDto,
    @Res() response: Response,
    @Param('id') itemId: string,
  ) {
    this.service
      .update(itemId, item)
      .then(result => {
        response.status(HttpStatus.OK).json(result);
      })
      .catch(error => {
        response.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
          message:
            'A ocurrido un error inesperado. Favor de contactar al administrador del sistema.',
          detail: error,
        });
      });
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete product by id' })
  @ApiResponse({
    status: 201,
    description: 'The deleted record',
    type: Product,
  })
  @ApiResponse({ status: 500, description: 'Internal Server Error' })
  @ApiQuery({ name: 'id' })
  delete(@Res() response: Response, @Param('id') itemId: string) {
    this.service
      .delete(itemId)
      .then(result => {
        response.status(HttpStatus.OK).json(result);
      })
      .catch(error => {
        response.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
          message:
            'A ocurrido un error inesperado. Favor de contactar al administrador del sistema.',
          detail: error,
        });
      });
  }
}
