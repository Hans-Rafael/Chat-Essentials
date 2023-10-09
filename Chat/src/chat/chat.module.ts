import { Module } from "@nestjs/common/decorators";
import { ChatGateway } from './chat.getaway';
import {MessagesModule} from '../messages/messages.module'
@Module({
    imports:[MessagesModule,],
    providers:[ChatGateway],
    controllers:[],
    exports:[],
 })
export class ChatModule { }
