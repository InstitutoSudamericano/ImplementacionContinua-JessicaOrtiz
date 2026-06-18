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
exports.ChatService = void 0;
const common_1 = require("@nestjs/common");
const chat_repository_1 = require("../domain/chat.repository");
let ChatService = class ChatService {
    chatRepository;
    constructor(chatRepository) {
        this.chatRepository = chatRepository;
    }
    async getMessagesByMatch(matchId) {
        if (!matchId) {
            throw new common_1.BadRequestException('Match ID es requerido');
        }
        return this.chatRepository.findByMatchId(matchId);
    }
    async sendMessage(data) {
        if (!data.matchId || !data.usuarioId || !data.mensaje) {
            throw new common_1.BadRequestException('Datos incompletos');
        }
        return this.chatRepository.createMessage(data);
    }
};
exports.ChatService = ChatService;
exports.ChatService = ChatService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(chat_repository_1.CHAT_REPOSITORY)),
    __metadata("design:paramtypes", [Object])
], ChatService);
//# sourceMappingURL=chat.service.js.map