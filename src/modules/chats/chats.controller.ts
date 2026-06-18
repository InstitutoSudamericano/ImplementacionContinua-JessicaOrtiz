import { Controller, Get, Post, Body, Query } from '@nestjs/common';
import { ChatService } from './application/chat.service';
import { CreateChatDTO } from './domain/chat.repository';

@Controller('api/chats')
export class ChatsController {
  constructor(private readonly chatService: ChatService) {}

  @Get()
  async getMessages(@Query('matchId') matchId: string) {
    return this.chatService.getMessagesByMatch(Number(matchId));
  }

  @Post()
  async sendMessage(@Body() body: CreateChatDTO) {
    return this.chatService.sendMessage(body);
  }
}
