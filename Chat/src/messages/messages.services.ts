import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import MessageEntity from './messages.entity';
import { MessageDto } from './dto/Messages.dto';


@Injectable()
export class MessagesService {
  constructor(
    @InjectRepository(MessageEntity)
    private messagesRepository: Repository<MessageEntity>,
  ) {}

  //get all mensajes
    async getAllMessages() {
      const messages = await this.messagesRepository.find({
       /*  relations: {
          sender: true,
        }, */
       // select: { sender: { id: true, messages: false, username: true } },
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
  //****
  //crear un mensaje carpeta DTO PERMITA SABER COMO VA INF AL HACER PETICION
  async createMessage(messageData: MessageDto, userId:string): Promise<MessageEntity>  {
    const newMessage: MessageEntity = this.messagesRepository.create(messageData);
    await this.messagesRepository.save(newMessage);
    return newMessage;
  }
 // borrar un mensaje
  async removeMessage(id: number): Promise<void> {
    await this.messagesRepository.delete(id);
  }
}