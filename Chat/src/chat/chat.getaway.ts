import {
  ConnectedSocket,
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
 
@WebSocketGateway()
// cors: { origin: '*' },
export class ChatGateway {
  constructor() //private messageService: MessageService,
  {}

  //obtener la instancia del servidor con el decorador webSocketServer
  @WebSocketServer() server: Server;

  //aplicar metodo afterInit
  afterInit() {
    console.log('------- Web socket iniciado -----');
  }

  //users = {};

  //Todo: aplicar el metodo handleConnection y emitir el evento 'connection'
  handleConnection = (socket: Socket) => {
    this.server.emit('connection', `Se ha conectado el id: ${socket.id}`);
  };
  // Todo: aplicar el metodo handleDisconnection y emitir el evento 'disconnection'
  handleDisconnect = (socket: Socket) => {
    this.server.emit('disconnection', `Se ha desconectado el id: ${socket.id}`);
  };
 

   //Todo: aplicar el metodo handleMessage y emitir el evento 'message'
  //Todo: Sl recivir el mensaje, emitir evento 'new_message' emviando la informacion que se recive del cliente
  @SubscribeMessage('event_message')
  handleEvent(
    @MessageBody() message: string,
    @ConnectedSocket() socket: Socket,
  ): void {
    //return this.server.emit('new_message', message);
    socket.emit('new_message', { Mensaje: message }, (message: any) =>
      console.log(message),
    );
  }
 
}
