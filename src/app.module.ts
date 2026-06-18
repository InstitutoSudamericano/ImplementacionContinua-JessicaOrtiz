import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { UsuariosModule } from './modules/usuarios/usuarios.module';
import { MatchsModule } from './modules/matchs/matchs.module';
import { ChatsModule } from './modules/chats/chats.module';

@Module({
  imports: [PrismaModule, UsuariosModule, MatchsModule, ChatsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
