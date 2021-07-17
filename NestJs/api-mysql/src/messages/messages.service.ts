import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateMessageDto } from './dto/create-message-dto';
import { Messages } from './entities/message.entity';

@Injectable()
export class MessagesService {
    constructor(
        @InjectRepository(Messages)
        private readonly repository: Repository<Messages>
    ) { }

    async getAll(): Promise<Messages[]> {
        return await this.repository.find();
    }

    async create(item: CreateMessageDto): Promise<Messages> {
        const newItem = new Messages();
        newItem.nick = item.nick;
        newItem.message = item.message;
        return await this.repository.save(newItem);
    }

    async update(itemId: number, item: CreateMessageDto): Promise<Messages> {
        const itemUpdate = await this.repository.findOne(itemId);
        itemUpdate.nick = item.nick;
        itemUpdate.message = item.message;
        return await this.repository.save(itemUpdate);
    }

    async delete(itemId: number): Promise<any> {
        return await this.repository.delete(itemId);
    }
}
