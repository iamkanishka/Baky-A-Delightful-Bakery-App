import { Message } from '../entities/message.entity';

export interface ChatRepository {
  createMessage(message: Omit<Message, 'id' | 'createdAt'>): Promise<Message>;
  getMessages(conversationId: string, skip: number, take: number): Promise<Message[]>;
}

 