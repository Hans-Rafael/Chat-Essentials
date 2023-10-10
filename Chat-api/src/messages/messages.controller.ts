import {Controller,Get, Post} from '@nestjs/common';
import { MessagesService } from './messages.services';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('messages')
@Controller('messages')
export class MessagesController {
    constructor (private messagesService: MessagesService){}

    //CRUD
    //@Post
} 