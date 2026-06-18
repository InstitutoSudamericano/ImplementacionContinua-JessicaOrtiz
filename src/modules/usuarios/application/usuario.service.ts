import { Injectable, Inject, BadRequestException, NotFoundException } from '@nestjs/common';
import { RegistroDTO, LoginDTO, USUARIO_REPOSITORY } from '../domain/usuario.repository';
import type { UsuarioRepository } from '../domain/usuario.repository';

@Injectable()
export class UsuarioService {
  constructor(
    @Inject(USUARIO_REPOSITORY)
    private readonly usuarioRepository: UsuarioRepository,
  ) {}

  async login(data: LoginDTO) {
    if (!data.email) {
      throw new BadRequestException('Email es requerido');
    }

    const contacto = await this.usuarioRepository.findByEmail(data.email);

    if (!contacto) {
      throw new BadRequestException('Credenciales incorrectas');
    }

    return {
      success: true,
      usuario: contacto.usuario,
    };
  }

  async registro(data: RegistroDTO) {
    if (!data.email || !data.nombre) {
      throw new BadRequestException('Datos incompletos');
    }

    const existingContacto = await this.usuarioRepository.findByEmail(data.email);

    if (existingContacto) {
      throw new BadRequestException('El correo electrónico ya está registrado');
    }

    const newUsuario = await this.usuarioRepository.createUsuario(data);
    return newUsuario;
  }

  async getUsuarios(userId: number) {
    if (!userId) throw new BadRequestException('ID requerido');
    return this.usuarioRepository.findAllExcept(userId, 20);
  }

  async getMe(email: string) {
    if (!email) throw new BadRequestException('Email requerido');
    const contacto = await this.usuarioRepository.findByEmail(email);
    if (!contacto) throw new NotFoundException('Usuario no encontrado');
    return contacto.usuario;
  }

  async sync(email: string, nombre: string, authId: string) {
    if (!email || !authId) throw new BadRequestException('Datos incompletos');
    
    let contacto = await this.usuarioRepository.findByEmail(email);
    
    if (!contacto) {
      const data = { email, password: '', nombre: nombre || 'Nuevo Usuario' };
      const newUsuario = await this.usuarioRepository.createUsuario(data);
      return { isNew: true, usuario: newUsuario };
    }
    
    return { isNew: false, usuario: contacto.usuario };
  }
}
