// src/chat/chat.module.ts
import { Module } from '@nestjs/common';
import { ChatController } from './presentation/chat.controller';
import { ChatGateway } from './infrastructure/websocket/chat.gateway';
import { ChatFacade } from './application/chat.facade';
import { PrismaChatRepository } from './infrastructure/prisma/prisma-chat.repository';
import { AesEncryptionService } from './infrastructure/crypto/aes-encryption.service';
import { PrismaModule } from '../prisma/prisma.module';
import { JwtModule } from '@nestjs/jwt';
import { ChatRepository } from './domain/repositories/chat.repository';
import { ConversationRepository } from './domain/repositories/conversation.repository';
import { EncryptionService } from './domain/interfaces/encryption.interface';

@Module({
  imports: [
    PrismaModule,
    JwtModule.register({
      secret: process.env.JWT_SECRET || 'your-secret',
      signOptions: { expiresIn: '1d' }
    })
  ],
  controllers: [ChatController],
  providers: [
    ChatGateway,
    ChatFacade,
    PrismaChatRepository,
    PrismaChatRepository,
    AesEncryptionService
    // { provide: ChatRepository, useClass: PrismaChatRepository },
    // { provide: ConversationRepository, useClass: PrismaChatRepository },
    // { provide: EncryptionService, useClass: AesEncryptionService }
  ]
})
export class ChatModule {}