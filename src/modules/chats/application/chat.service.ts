import { Injectable, Inject, BadRequestException } from '@nestjs/common';
import { CreateChatDTO, CHAT_REPOSITORY } from '../domain/chat.repository';
import type { ChatRepository } from '../domain/chat.repository';

@Injectable()
export class ChatService {
  constructor(
    @Inject(CHAT_REPOSITORY)
    private readonly chatRepository: ChatRepository,
  ) {}

  async getMessagesByMatch(matchId: number) {
    if (!matchId) {
      throw new BadRequestException('Match ID es requerido');
    }
    return this.chatRepository.findByMatchId(matchId);
  }

  async sendMessage(data: CreateChatDTO) {
    if (!data.matchId || !data.usuarioId || !data.mensaje) {
      throw new BadRequestException('Datos incompletos');
    }

    return this.chatRepository.createMessage(data);
  }
}
