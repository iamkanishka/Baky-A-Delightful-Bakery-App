// src/chat/presentation/chat.controller.ts
import { Controller, Get, Post, Body, Query, UseGuards, Request } from '@nestjs/common';
import { ChatFacade } from '../application/chat.facade';
import { SendMessageCommand } from '../application/commands/send-message.command';
import { GetMessagesQuery } from '../application/queries/get-messages.query';
import { JwtAuthGuard } from 'src/guards/jwt.guard';
 

@Controller('chat')
export class ChatController {
  constructor(private readonly chatFacade: ChatFacade) {}

  @UseGuards(JwtAuthGuard)
  @Post('message')
  async sendMessage(@Request() req, @Body() body: { conversationId: string; content: string }) {
    const command = new SendMessageCommand(req.user.sub, body.conversationId, body.content);
    return this.chatFacade.handleSendMessage(command);
  }

  @UseGuards(JwtAuthGuard)
  @Get('messages')
  async getMessages(
    @Request() req,
    @Query('conversationId') conversationId: string,
    @Query('page') page = '1',
    @Query('limit') limit = '20'
  ) {
    const query = new GetMessagesQuery(conversationId, req.user.sub, parseInt(page), parseInt(limit));
    return this.chatFacade.handleGetMessages(query);
  }
}