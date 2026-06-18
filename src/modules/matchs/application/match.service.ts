import { Injectable, Inject, BadRequestException } from '@nestjs/common';
import { CreateMatchDTO, MATCH_REPOSITORY } from '../domain/match.repository';
import type { MatchRepository } from '../domain/match.repository';

@Injectable()
export class MatchService {
  constructor(
    @Inject(MATCH_REPOSITORY)
    private readonly matchRepository: MatchRepository,
  ) {}

  async getMatches(userId: number) {
    if (!userId) {
      throw new BadRequestException('ID requerido');
    }
    return this.matchRepository.findMatchesByUser(userId);
  }

  async createMatch(data: CreateMatchDTO) {
    if (!data.userId || !data.targetId) {
      throw new BadRequestException('IDs requeridos');
    }

    const existing = await this.matchRepository.findExistingMatch(data.userId, data.targetId);

    if (existing) {
      return { isMatch: true, newMatch: existing, isNew: false };
    }

    const newMatch = await this.matchRepository.createMatch(data);
    return { isMatch: true, newMatch, isNew: true };
  }
}
