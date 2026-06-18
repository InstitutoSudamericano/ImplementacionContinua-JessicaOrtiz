import { Injectable } from '@nestjs/common';
import { ChatRepository, CreateChatDTO } from '../domain/chat.repository';
import { PrismaService } from '../../../prisma/prisma.service';

@Injectable()
export class PrismaChatRepository implements ChatRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findByMatchId(matchId: number): Promise<any[]> {
    return this.prisma.mensajes.findMany({
      where: {
        id_match: matchId,
      },
      include: {
        usuario: true, // Includes the sender's info
      },
      orderBy: {
        fecha_envio: 'asc',
      },
    });
  }

  async createMessage(data: CreateChatDTO): Promise<any> {
    return this.prisma.mensajes.create({
      data: {
        id_match: data.matchId,
        remitente_id: data.usuarioId,
        contenido: data.mensaje,
      },
      include: {
        usuario: true,
      },
    });
  }
}
