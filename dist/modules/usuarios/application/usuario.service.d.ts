import { RegistroDTO, LoginDTO } from '../domain/usuario.repository';
import type { UsuarioRepository } from '../domain/usuario.repository';
export declare class UsuarioService {
    private readonly usuarioRepository;
    constructor(usuarioRepository: UsuarioRepository);
    login(data: LoginDTO): Promise<{
        success: boolean;
        usuario: any;
    }>;
    registro(data: RegistroDTO): Promise<any>;
    getUsuarios(userId: number): Promise<any[]>;
    getMe(email: string): Promise<any>;
    sync(email: string, nombre: string, authId: string): Promise<{
        isNew: boolean;
        usuario: any;
    }>;
}
