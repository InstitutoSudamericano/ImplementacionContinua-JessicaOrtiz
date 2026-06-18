import { CreateChatDTO } from '../domain/chat.repository';
import type { ChatRepository } from '../domain/chat.repository';
export declare class ChatService {
    private readonly chatRepository;
    constructor(chatRepository: ChatRepository);
    getMessagesByMatch(matchId: number): Promise<any[]>;
    sendMessage(data: CreateChatDTO): Promise<any>;
}
