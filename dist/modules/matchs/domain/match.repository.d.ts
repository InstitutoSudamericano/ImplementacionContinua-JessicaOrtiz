export declare class CreateMatchDTO {
    userId: number;
    targetId: number;
}
export declare const MATCH_REPOSITORY = "MATCH_REPOSITORY";
export interface MatchRepository {
    findMatchesByUser(userId: number): Promise<any[]>;
    findExistingMatch(userId: number, targetId: number): Promise<any | null>;
    createMatch(data: CreateMatchDTO): Promise<any>;
}
