import { Module } from '@nestjs/common';
import { ChatModule } from './chat/chat.module';
import { MessagesModule } from './messages/messages.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import MessageEntity from './messages/messages.entity';
import configuration from './config/configuration';
import { UsersModule } from './users/users.module';
import UserEntity from './users/users.entity';
import { AuthModule } from './auth/auth.module';

ConfigModule.forRoot({
  envFilePath: '.development.env',
});

@Module({
  imports: [
    ChatModule,
    MessagesModule,
    ConfigModule.forRoot({ load: [configuration] }), //for .env
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
      database: 'chat_essentials',
      entities: [MessageEntity, UserEntity],
      synchronize: true,
      retryDelay: 3000,
      retryAttempts: 5,
    }),
    UsersModule,
    AuthModule,

  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
