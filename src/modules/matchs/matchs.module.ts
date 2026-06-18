import { Module } from '@nestjs/common';
import { MatchsController } from './matchs.controller';
import { MatchService } from './application/match.service';
import { PrismaMatchRepository } from './infrastructure/prisma-match.repository';
import { MATCH_REPOSITORY } from './domain/match.repository';

@Module({
  controllers: [MatchsController],
  providers: [
    MatchService,
    {
      provide: MATCH_REPOSITORY,
      useClass: PrismaMatchRepository,
    },
  ],
})
export class MatchsModule {}
