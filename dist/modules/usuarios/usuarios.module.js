"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuariosModule = void 0;
const common_1 = require("@nestjs/common");
const usuarios_controller_1 = require("./usuarios.controller");
const usuario_service_1 = require("./application/usuario.service");
const prisma_usuario_repository_1 = require("./infrastructure/prisma-usuario.repository");
const usuario_repository_1 = require("./domain/usuario.repository");
let UsuariosModule = class UsuariosModule {
};
exports.UsuariosModule = UsuariosModule;
exports.UsuariosModule = UsuariosModule = __decorate([
    (0, common_1.Module)({
        controllers: [usuarios_controller_1.UsuariosController],
        providers: [
            usuario_service_1.UsuarioService,
            {
                provide: usuario_repository_1.USUARIO_REPOSITORY,
                useClass: prisma_usuario_repository_1.PrismaUsuarioRepository,
            },
        ],
    })
], UsuariosModule);
//# sourceMappingURL=usuarios.module.js.map