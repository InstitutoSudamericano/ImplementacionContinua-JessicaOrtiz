"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuariosController = void 0;
const common_1 = require("@nestjs/common");
const usuario_service_1 = require("./application/usuario.service");
const usuario_repository_1 = require("./domain/usuario.repository");
let UsuariosController = class UsuariosController {
    usuarioService;
    constructor(usuarioService) {
        this.usuarioService = usuarioService;
    }
    async getUsuarios(id) {
        return this.usuarioService.getUsuarios(Number(id));
    }
    async getMe(email) {
        return this.usuarioService.getMe(email);
    }
    async login(loginDto) {
        return this.usuarioService.login(loginDto);
    }
    async registro(registroDto) {
        return this.usuarioService.registro(registroDto);
    }
    async sync(body) {
        const result = await this.usuarioService.sync(body.email, body.nombre, body.authId);
        return { success: true, usuario: result.usuario };
    }
};
exports.UsuariosController = UsuariosController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UsuariosController.prototype, "getUsuarios", null);
__decorate([
    (0, common_1.Get)('me'),
    __param(0, (0, common_1.Query)('email')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UsuariosController.prototype, "getMe", null);
__decorate([
    (0, common_1.Post)('login'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [usuario_repository_1.LoginDTO]),
    __metadata("design:returntype", Promise)
], UsuariosController.prototype, "login", null);
__decorate([
    (0, common_1.Post)('registro'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [usuario_repository_1.RegistroDTO]),
    __metadata("design:returntype", Promise)
], UsuariosController.prototype, "registro", null);
__decorate([
    (0, common_1.Post)('sync'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UsuariosController.prototype, "sync", null);
exports.UsuariosController = UsuariosController = __decorate([
    (0, common_1.Controller)('api/usuarios'),
    __metadata("design:paramtypes", [usuario_service_1.UsuarioService])
], UsuariosController);
//# sourceMappingURL=usuarios.controller.js.map