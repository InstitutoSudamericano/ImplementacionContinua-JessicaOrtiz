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
exports.UsuarioService = void 0;
const common_1 = require("@nestjs/common");
const usuario_repository_1 = require("../domain/usuario.repository");
let UsuarioService = class UsuarioService {
    usuarioRepository;
    constructor(usuarioRepository) {
        this.usuarioRepository = usuarioRepository;
    }
    async login(data) {
        if (!data.email) {
            throw new common_1.BadRequestException('Email es requerido');
        }
        const contacto = await this.usuarioRepository.findByEmail(data.email);
        if (!contacto) {
            throw new common_1.BadRequestException('Credenciales incorrectas');
        }
        return {
            success: true,
            usuario: contacto.usuario,
        };
    }
    async registro(data) {
        if (!data.email || !data.nombre) {
            throw new common_1.BadRequestException('Datos incompletos');
        }
        const existingContacto = await this.usuarioRepository.findByEmail(data.email);
        if (existingContacto) {
            throw new common_1.BadRequestException('El correo electrónico ya está registrado');
        }
        const newUsuario = await this.usuarioRepository.createUsuario(data);
        return newUsuario;
    }
    async getUsuarios(userId) {
        if (!userId)
            throw new common_1.BadRequestException('ID requerido');
        return this.usuarioRepository.findAllExcept(userId, 20);
    }
    async getMe(email) {
        if (!email)
            throw new common_1.BadRequestException('Email requerido');
        const contacto = await this.usuarioRepository.findByEmail(email);
        if (!contacto)
            throw new common_1.NotFoundException('Usuario no encontrado');
        return contacto.usuario;
    }
    async sync(email, nombre, authId) {
        if (!email || !authId)
            throw new common_1.BadRequestException('Datos incompletos');
        let contacto = await this.usuarioRepository.findByEmail(email);
        if (!contacto) {
            const data = { email, password: '', nombre: nombre || 'Nuevo Usuario' };
            const newUsuario = await this.usuarioRepository.createUsuario(data);
            return { isNew: true, usuario: newUsuario };
        }
        return { isNew: false, usuario: contacto.usuario };
    }
};
exports.UsuarioService = UsuarioService;
exports.UsuarioService = UsuarioService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(usuario_repository_1.USUARIO_REPOSITORY)),
    __metadata("design:paramtypes", [Object])
], UsuarioService);
//# sourceMappingURL=usuario.service.js.map