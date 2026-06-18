import { Controller, Get, Post, Body, Query } from '@nestjs/common';
import { MatchService } from './application/match.service';
import { CreateMatchDTO } from './domain/match.repository';

@Controller('api/matchs')
export class MatchsController {
  constructor(private readonly matchService: MatchService) {}

  @Get()
  async getMatches(@Query('id') id: string) {
    return this.matchService.getMatches(Number(id));
  }

  @Post()
  async createMatch(@Body() body: CreateMatchDTO) {
    return this.matchService.createMatch(body);
  }
}
