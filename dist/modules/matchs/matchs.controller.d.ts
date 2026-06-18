import { MatchService } from './application/match.service';
import { CreateMatchDTO } from './domain/match.repository';
export declare class MatchsController {
    private readonly matchService;
    constructor(matchService: MatchService);
    getMatches(id: string): Promise<any[]>;
    createMatch(body: CreateMatchDTO): Promise<{
        isMatch: boolean;
        newMatch: any;
        isNew: boolean;
    }>;
}
