import { ChatService } from './application/chat.service';
import { CreateChatDTO } from './domain/chat.repository';
export declare class ChatsController {
    private readonly chatService;
    constructor(chatService: ChatService);
    getMessages(matchId: string): Promise<any[]>;
    sendMessage(body: CreateChatDTO): Promise<any>;
}
