import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MessagesService } from './messages.services';
import { MessagesController } from './messages.controller';
import MessageEntity from './messages.entity';

@Module({
  imports: [TypeOrmModule.forFeature([MessageEntity])],
  providers: [MessagesService],
  controllers: [MessagesController],
  exports: [MessagesService],
})
export class MessagesModule {}
