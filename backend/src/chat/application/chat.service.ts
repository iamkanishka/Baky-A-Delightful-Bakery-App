// src/chat/chat.service.ts
import { Injectable } from '@nestjs/common';
import * as CryptoJS from 'crypto-js';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ChatService {
  private readonly encryptionKey = process.env.ENCRYPTION_KEY || 'secret-key';
  private onlineUsers = new Map<string, string[]>();

  constructor(private prisma: PrismaService) {}

  async handleUserConnected(userId: string) {
    this.onlineUsers.set(userId, []);
  }

  async canUserJoinConversation(userId: string, conversationId: string): Promise<boolean> {
    const conversation = await this.prisma.conversation.findUnique({
      where: { id: conversationId },
      select: { memberOneId: true, memberTwoId: true }
    });
    
    return conversation?.memberOneId === userId || conversation?.memberTwoId === userId;
  }

  async createMessage(userId: string, conversationId: string, content: string) {
    const encryptedContent = CryptoJS.AES.encrypt(content, this.encryptionKey).toString();
    
    const message = await this.prisma.message.create({
      data: {
        content: encryptedContent,
        memberId: userId,
        conversationId,
      },
      include: {
        member: { select: { id: true, name: true } },
        conversation: { select: { id: true } }
      }
    });

    return {
      ...message,
      content: this.decryptMessage(encryptedContent),
      createdAt: message.createdAt.toISOString()
    };
  }

  async getMessages(conversationId: string, userId: string, skip = 0, take = 20) {
    const canAccess = await this.canUserJoinConversation(userId, conversationId);
    if (!canAccess) throw new Error('Unauthorized');

    const messages = await this.prisma.message.findMany({
      where: { 
        conversationId, 
        deleted: false 
      },
      skip,
      take,
      orderBy: { createdAt: 'desc' },
      include: { member: { select: { id: true, name: true } } }
    });

    return messages.map(msg => ({
      ...msg,
      content: this.decryptMessage(msg.content),
      createdAt: msg.createdAt.toISOString()
    }));
  }

  private decryptMessage(encrypted: string): string {
    const bytes = CryptoJS.AES.decrypt(encrypted, this.encryptionKey);
    return bytes.toString(CryptoJS.enc.Utf8);
  }
}