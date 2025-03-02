export class GetMessagesQuery {
    constructor(
      public readonly conversationId: string,
      public readonly userId: string,
      public readonly page: number,
      public readonly limit: number
    ) {}
  }