import { Injectable } from '@nestjs/common';
import { MatchRepository, CreateMatchDTO } from '../domain/match.repository';
import { PrismaService } from '../../../prisma/prisma.service';

@Injectable()
export class PrismaMatchRepository implements MatchRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findMatchesByUser(userId: number): Promise<any[]> {
    const matches1 = await this.prisma.matchs.findMany({
      where: { usuario1_id: userId, activo: true },
      include: { usuario2: { include: { fotografias: true } } },
    });

    const matches2 = await this.prisma.matchs.findMany({
      where: { usuario2_id: userId, activo: true },
      include: { usuario1: { include: { fotografias: true } } },
    });

    const formattedMatches = [
      ...matches1.map((m: any) => ({ ...m })),
      ...matches2.map((m: any) => ({
        id_match: m.id_match,
        usuario1_id: m.usuario1_id,
        usuario2_id: m.usuario2_id,
        activo: m.activo,
        usuario2: m.usuario1,
      }))
    ];

    return formattedMatches;
  }

  async findExistingMatch(userId: number, targetId: number): Promise<any | null> {
    return this.prisma.matchs.findFirst({
      where: {
        OR: [
          { usuario1_id: userId, usuario2_id: targetId },
          { usuario1_id: targetId, usuario2_id: userId },
        ]
      }
    });
  }

  async createMatch(data: CreateMatchDTO): Promise<any> {
    return this.prisma.matchs.create({
      data: {
        usuario1_id: data.userId,
        usuario2_id: data.targetId,
      },
      include: {
        usuario2: { include: { fotografias: true } }
      }
    });
  }
}
