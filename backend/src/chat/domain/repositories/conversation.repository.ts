import { Conversation } from '../entities/conversation.entity';

export interface ConversationRepository {
  findById(id: string): Promise<Conversation | null>;
}