import { ChatRepository, CreateChatDTO } from '../domain/chat.repository';
import { PrismaService } from '../../../prisma/prisma.service';
export declare class PrismaChatRepository implements ChatRepository {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findByMatchId(matchId: number): Promise<any[]>;
    createMessage(data: CreateChatDTO): Promise<any>;
}
