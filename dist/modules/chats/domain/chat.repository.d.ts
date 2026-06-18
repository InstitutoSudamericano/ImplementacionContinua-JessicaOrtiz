export declare class CreateChatDTO {
    matchId: number;
    usuarioId: number;
    mensaje: string;
}
export declare const CHAT_REPOSITORY = "CHAT_REPOSITORY";
export interface ChatRepository {
    findByMatchId(matchId: number): Promise<any[]>;
    createMessage(data: CreateChatDTO): Promise<any>;
}
