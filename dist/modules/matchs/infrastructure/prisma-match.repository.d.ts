import { MatchRepository, CreateMatchDTO } from '../domain/match.repository';
import { PrismaService } from '../../../prisma/prisma.service';
export declare class PrismaMatchRepository implements MatchRepository {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findMatchesByUser(userId: number): Promise<any[]>;
    findExistingMatch(userId: number, targetId: number): Promise<any | null>;
    createMatch(data: CreateMatchDTO): Promise<any>;
}
