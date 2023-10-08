import { Module } from "@nestjs/common/decorators";
import { ChatGateway } from './chat.getaway';
//import {MessageModule} from '../message/message.module';


@Module({
    imports:[],
    providers:[ChatGateway],
    controllers:[],
    exports:[],
 })
export class ChatModule { }
