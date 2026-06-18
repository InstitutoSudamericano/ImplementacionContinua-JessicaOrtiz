import { UsuarioRepository, RegistroDTO } from '../domain/usuario.repository';
import { PrismaService } from '../../../prisma/prisma.service';
export declare class PrismaUsuarioRepository implements UsuarioRepository {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findByEmail(email: string): Promise<any | null>;
    createUsuario(data: RegistroDTO): Promise<any>;
    findAllExcept(userId: number, take: number): Promise<any[]>;
}
