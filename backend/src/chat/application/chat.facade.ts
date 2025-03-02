// src/chat/application/chat.facade.ts
import { Injectable } from '@nestjs/common';
import { ChatRepository } from '../domain/repositories/chat.repository';
import { ConversationRepository } from '../domain/repositories/conversation.repository';
import { EncryptionService } from '../domain/interfaces/encryption.interface';
import { SendMessageCommand } from './commands/send-message.command';
import { GetMessagesQuery } from './queries/get-messages.query';
import { Message } from '../domain/entities/message.entity';
import { Conversation } from '../domain/entities/conversation.entity';

@Injectable()
export class ChatFacade {
  constructor(
    private readonly chatRepository: ChatRepository,
    private readonly conversationRepository: ConversationRepository,
    private readonly encryptionService: EncryptionService
  ) {}

  async handleSendMessage(command: SendMessageCommand): Promise<Message> {
    const { userId, conversationId, content } = command;
    const conversation = await this.validateConversation(userId, conversationId);
    
    const encryptedContent = this.encryptionService.encrypt(content);
    const message = await this.chatRepository.createMessage({
      content: encryptedContent,
      memberId: userId,
      conversationId,
      deleted: false
    });

    return { ...message, content };
  }

  async handleGetMessages(query: GetMessagesQuery): Promise<Message[]> {
    const { conversationId, userId, page, limit } = query;
    await this.validateConversation(userId, conversationId);
    
    const skip = (page - 1) * limit;
    const messages = await this.chatRepository.getMessages(conversationId, skip, limit);
    
    return messages.map(msg => ({
      ...msg,
      content: this.encryptionService.decrypt(msg.content)
    }));
  }

  private async validateConversation(userId: string, conversationId: string): Promise<Conversation> {
    const conversation = await this.conversationRepository.findById(conversationId);
    if (!conversation || ![conversation.memberOneId, conversation.memberTwoId].includes(userId)) {
      throw new Error('Unauthorized');
    }
    return conversation;
  }
}