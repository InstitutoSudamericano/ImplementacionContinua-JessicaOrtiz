import { Module } from '@nestjs/common';
import { ChatsController } from './chats.controller';
import { ChatService } from './application/chat.service';
import { PrismaChatRepository } from './infrastructure/prisma-chat.repository';
import { CHAT_REPOSITORY } from './domain/chat.repository';

@Module({
  controllers: [ChatsController],
  providers: [
    ChatService,
    {
      provide: CHAT_REPOSITORY,
      useClass: PrismaChatRepository,
    },
  ],
})
export class ChatsModule {}
