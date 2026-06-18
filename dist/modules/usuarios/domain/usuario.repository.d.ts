export declare class RegistroDTO {
    email: string;
    password?: string;
    nombre: string;
    fotoUrl?: string;
}
export declare class LoginDTO {
    email: string;
    password?: string;
}
export declare const USUARIO_REPOSITORY = "USUARIO_REPOSITORY";
export interface UsuarioRepository {
    findByEmail(email: string): Promise<any | null>;
    createUsuario(data: RegistroDTO): Promise<any>;
    findAllExcept(userId: number, take: number): Promise<any[]>;
}
