export interface EncryptionService {
    encrypt(content: string): string;
    decrypt(encrypted: string): string;
  }