import { Module } from '@nestjs/common';
import { UsuariosController } from './usuarios.controller';
import { UsuarioService } from './application/usuario.service';
import { PrismaUsuarioRepository } from './infrastructure/prisma-usuario.repository';
import { USUARIO_REPOSITORY } from './domain/usuario.repository';

@Module({
  controllers: [UsuariosController],
  providers: [
    UsuarioService,
    {
      provide: USUARIO_REPOSITORY,
      useClass: PrismaUsuarioRepository,
    },
  ],
})
export class UsuariosModule {}
