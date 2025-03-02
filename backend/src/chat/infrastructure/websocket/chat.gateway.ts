// src/chat/infrastructure/websocket/chat.gateway.ts
import { WebSocketGateway, SubscribeMessage, MessageBody, ConnectedSocket } from '@nestjs/websockets';
import { Socket } from 'socket.io';
import { ChatFacade } from '../../application/chat.facade';
import { SendMessageCommand } from '../../application/commands/send-message.command';
import { JwtService } from '@nestjs/jwt';

@WebSocketGateway({ cors: { origin: '*' }, namespace: '/chat' })
export class ChatGateway {
  constructor(
    private readonly chatFacade: ChatFacade,
    private readonly jwtService: JwtService
  ) {}

  async handleConnection(client: Socket) {
    try {
      const token = client.handshake.auth.token;
      const payload = await this.jwtService.verify(token);
      client.data.userId = payload.sub;
    } catch {
      client.disconnect();
    }
  }

  @SubscribeMessage('joinConversation')
  handleJoinConversation(
    @MessageBody() data: { conversationId: string },
    @ConnectedSocket() client: Socket
  ) {
    client.join(data.conversationId);
    client.emit('joined', { conversationId: data.conversationId });
  }

  @SubscribeMessage('sendMessage')
  async handleMessage(
    @MessageBody() data: { conversationId: string; content: string },
    @ConnectedSocket() client: Socket
  ) {
    const command = new SendMessageCommand(client.data.userId, data.conversationId, data.content);
    const message = await this.chatFacade.handleSendMessage(command);
    
    client.to(data.conversationId).emit('newMessage', message);
    client.emit('messageSent', message);
  }
}