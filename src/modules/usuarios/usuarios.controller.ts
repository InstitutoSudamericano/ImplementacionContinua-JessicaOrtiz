import { Controller, Get, Post, Body, Query } from '@nestjs/common';
import { UsuarioService } from './application/usuario.service';
import { LoginDTO, RegistroDTO } from './domain/usuario.repository';

@Controller('api/usuarios')
export class UsuariosController {
  constructor(private readonly usuarioService: UsuarioService) {}

  @Get()
  async getUsuarios(@Query('id') id: string) {
    return this.usuarioService.getUsuarios(Number(id));
  }

  @Get('me')
  async getMe(@Query('email') email: string) {
    return this.usuarioService.getMe(email);
  }

  @Post('login')
  async login(@Body() loginDto: LoginDTO) {
    return this.usuarioService.login(loginDto);
  }

  @Post('registro')
  async registro(@Body() registroDto: RegistroDTO) {
    return this.usuarioService.registro(registroDto);
  }

  @Post('sync')
  async sync(@Body() body: { email: string; nombre: string; authId: string }) {
    const result = await this.usuarioService.sync(body.email, body.nombre, body.authId);
    return { success: true, usuario: result.usuario };
  }
}
