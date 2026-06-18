export class CreateChatDTO {
  matchId: number;
  usuarioId: number;
  mensaje: string;
}

export const CHAT_REPOSITORY = 'CHAT_REPOSITORY';

export interface ChatRepository {
  findByMatchId(matchId: number): Promise<any[]>;
  createMessage(data: CreateChatDTO): Promise<any>;
}
