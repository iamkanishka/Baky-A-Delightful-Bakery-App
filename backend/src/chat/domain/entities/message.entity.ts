export class Message {
    constructor(
      public id: string,
      public content: string,
      public memberId: string,
      public conversationId: string,
      public createdAt: Date,
      public deleted: boolean = false
    ) {}
  }