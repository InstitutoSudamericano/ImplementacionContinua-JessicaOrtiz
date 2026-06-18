import { Injectable } from '@nestjs/common';
import { UsuarioRepository, RegistroDTO } from '../domain/usuario.repository';
import { PrismaService } from '../../../prisma/prisma.service';

@Injectable()
export class PrismaUsuarioRepository implements UsuarioRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findByEmail(email: string): Promise<any | null> {
    return this.prisma.contacto.findUnique({
      where: { correo: email },
      include: {
        usuario: {
          include: {
            perfil: true,
            fotografias: true,
          },
        },
      },
    });
  }

  async createUsuario(data: RegistroDTO): Promise<any> {
    return this.prisma.usuario.create({
      data: {
        nombre: data.nombre,
        edad: 25,
        genero: 'No especificado',
        nacionalidad: 'Local',
        ciudad_pais: 'Ciudad',
        contacto: {
          create: {
            correo: data.email,
            password: data.password || '',
          },
        },
        perfil: {
          create: {
            biografia: '¡Hola! Soy nuevo aquí.',
          },
        },
        ...(data.fotoUrl ? { fotografias: { create: { url_imagen: data.fotoUrl, es_principal: true } } } : {}),
      },
      include: {
        contacto: true,
        perfil: true,
        fotografias: true,
      },
    });
  }

  async findAllExcept(userId: number, take: number): Promise<any[]> {
    return this.prisma.usuario.findMany({
      where: {
        id_usuario: {
          not: userId,
        },
      },
      include: {
        perfil: true,
        fotografias: true,
      },
      take,
    });
  }
}
