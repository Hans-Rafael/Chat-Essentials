import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import MessageEntity from './messages.entity';
import { MessageDto } from './dto/Messages.dto';
import UserEntity from '../users/users.entity';

@Injectable()
export class MessagesService {
  constructor(
    @InjectRepository(MessageEntity)
    private messagesRepository: Repository<MessageEntity>,
    @InjectRepository(UserEntity)
    private usersRepository: Repository<UserEntity>,
  ) {}

  //get all mensajes
    async getAllMessages() {
      const messages = await this.messagesRepository.find({
         relations: {
          sender: true,
        },
        select: { sender: { id: true, messages: false, username: true } },
      });
    if (messages) {
      return messages;
    }
    throw new HttpException(
      'There is not users in the database yet',
      HttpStatus.NOT_FOUND,
    );
  }
  //getAllUserMessages from a user id
  async getAllUserMessages(id: string) {
    const messages = await this.messagesRepository.find({
      relations: {
        sender: true,
      },
      where: {
        sender: { id },
      },
      select: { sender: { id: false, messages: false, username: false } },
    });
    if (messages) {
      return messages;
    }
    throw new HttpException(
      'There is not users in the database yet',
      HttpStatus.NOT_FOUND,
    );
  }

  //crear un mensaje carpeta // DTO PERMITA SABER COMO VA INF AL HACER PETICION
  async createMessage(messageData: MessageDto, userId: string) {
    const sender = await this.usersRepository.findOneBy({ id: userId });
    const newMessage = this.messagesRepository.create({
      ...messageData,
      sender,
    });
    await this.messagesRepository.save(newMessage);
    return newMessage;
  }
 // borrar un mensaje
  async removeMessage(id: number): Promise<void> {
    await this.messagesRepository.delete(id);
  }
}