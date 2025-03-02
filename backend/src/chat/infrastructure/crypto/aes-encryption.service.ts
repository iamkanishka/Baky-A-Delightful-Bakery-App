// src/chat/infrastructure/crypto/aes-encryption.service.ts
import { Injectable } from '@nestjs/common';
import * as CryptoJS from 'crypto-js';
import { EncryptionService } from '../../domain/interfaces/encryption.interface';

@Injectable()
export class AesEncryptionService implements EncryptionService {
  private readonly key = process.env.ENCRYPTION_KEY || 'secret-key';

  encrypt(content: string): string {
    return CryptoJS.AES.encrypt(content, this.key).toString();
  }

  decrypt(encrypted: string): string {
    const bytes = CryptoJS.AES.decrypt(encrypted, this.key);
    return bytes.toString(CryptoJS.enc.Utf8);
  }
}