// src/chat/infrastructure/prisma/prisma-chat.repository.ts
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../prisma/prisma.service';
import { ChatRepository } from '../../domain/repositories/chat.repository';
import { Message } from '../../domain/entities/message.entity';
import { ConversationRepository } from '../../domain/repositories/conversation.repository';
import { Conversation } from '../../domain/entities/conversation.entity';

@Injectable()
export class PrismaChatRepository implements ChatRepository, ConversationRepository {
  constructor(private readonly prisma: PrismaService) {}

  async createMessage(data: Omit<Message, 'id' | 'createdAt'>): Promise<Message> {
    const message = await this.prisma.message.create({
      data,
      include: { member: { select: { id: true, name: true } } }
    });
    return new Message(
      message.id,
      message.content,
      message.memberId,
      message.conversationId,
      message.createdAt,
      message.deleted
    );
  }

  async getMessages(conversationId: string, skip: number, take: number): Promise<Message[]> {
    const messages = await this.prisma.message.findMany({
      where: { conversationId, deleted: false },
      skip,
      take,
      orderBy: { createdAt: 'desc' },
      include: { member: { select: { id: true, name: true } } }
    });
    return messages.map(msg => new Message(msg.id, msg.content, msg.memberId, msg.conversationId, msg.createdAt, msg.deleted));
  }

  async findById(id: string): Promise<Conversation | null> {
    const conversation = await this.prisma.conversation.findUnique({
      where: { id }
    });
    return conversation ? new Conversation(conversation.id, conversation.memberOneId, conversation.memberTwoId) : null;
  }
}