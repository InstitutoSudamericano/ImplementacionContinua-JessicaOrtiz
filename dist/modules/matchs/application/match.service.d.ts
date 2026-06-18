import { CreateMatchDTO } from '../domain/match.repository';
import type { MatchRepository } from '../domain/match.repository';
export declare class MatchService {
    private readonly matchRepository;
    constructor(matchRepository: MatchRepository);
    getMatches(userId: number): Promise<any[]>;
    createMatch(data: CreateMatchDTO): Promise<{
        isMatch: boolean;
        newMatch: any;
        isNew: boolean;
    }>;
}
