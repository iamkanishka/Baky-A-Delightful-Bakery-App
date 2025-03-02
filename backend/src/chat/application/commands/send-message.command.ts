export class SendMessageCommand {
    constructor(
      public readonly userId: string,
      public readonly conversationId: string,
      public readonly content: string
    ) {}
  }