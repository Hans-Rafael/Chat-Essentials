import { Module } from '@nestjs/common';
import { ChatModule } from './chat/chat.module';
//import {MessagesModule} from "./messages/messages.entity";
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { MessageEntity } from './messages/messages.entity';
import configuration from './config/configuration';


ConfigModule.forRoot({
  envFilePath: '.development.env',
});

@Module({
  imports: [
    ChatModule,
    //MessagesModule,
    ConfigModule.forRoot({ load: [configuration] }), //for .env
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
      database: 'chat_essentials',
      entities: [MessageEntity],
      synchronize: true,
      retryDelay: 3000,
      retryAttempts: 5,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
