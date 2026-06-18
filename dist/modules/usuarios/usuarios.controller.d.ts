import { UsuarioService } from './application/usuario.service';
import { LoginDTO, RegistroDTO } from './domain/usuario.repository';
export declare class UsuariosController {
    private readonly usuarioService;
    constructor(usuarioService: UsuarioService);
    getUsuarios(id: string): Promise<any[]>;
    getMe(email: string): Promise<any>;
    login(loginDto: LoginDTO): Promise<{
        success: boolean;
        usuario: any;
    }>;
    registro(registroDto: RegistroDTO): Promise<any>;
    sync(body: {
        email: string;
        nombre: string;
        authId: string;
    }): Promise<{
        success: boolean;
        usuario: any;
    }>;
}
