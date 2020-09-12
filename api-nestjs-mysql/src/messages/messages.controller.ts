import { Controller, Get, Post, Body, Put, Delete, Res, HttpStatus, Param } from '@nestjs/common';
import { CreateMessageDto } from './dto/create-message-dto';
import { MessagesService } from './messages.service';

@Controller('messages')
export class MessagesController {
    constructor(
        private service: MessagesService
    ) { }

    @Get()
    getAll(@Res() response) {
        this.service.getAll().then(result => {
            response.status(HttpStatus.OK).json(result);
        }).catch(() => {
            response.status(HttpStatus.FORBIDDEN).json({message: 'Seeker error'});
        });
    }

    @Post()
    create(@Body() item: CreateMessageDto, @Res() response) {
        this.service.create(item).then(result => {
            response.status(HttpStatus.CREATED).json(result);
        }).catch(() => {
            response.status(HttpStatus.FORBIDDEN).json({message: 'Creator error'});
        });
    }
    
    @Put(':id')
    update(@Body() item: CreateMessageDto, @Res() response, @Param('id') itemId) {
        this.service.update(itemId, item).then(result => {
            response.status(HttpStatus.OK).json(result);
        }).catch(() => {
            response.status(HttpStatus.FORBIDDEN).json({message: 'Updater error'});
        });
    }

    @Delete(':id')
    delete(@Res() response, @Param('id') itemId) {
        this.service.delete(itemId).then(result => {
            response.status(HttpStatus.OK).json(result);
        }).catch(() => {
            response.status(HttpStatus.FORBIDDEN).json({message: 'Eliminator error'});
        });
    }
}
