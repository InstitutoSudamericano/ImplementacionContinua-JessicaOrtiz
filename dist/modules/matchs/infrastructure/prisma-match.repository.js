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
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrismaMatchRepository = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../../prisma/prisma.service");
let PrismaMatchRepository = class PrismaMatchRepository {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async findMatchesByUser(userId) {
        const matches1 = await this.prisma.matchs.findMany({
            where: { usuario1_id: userId, activo: true },
            include: { usuario2: { include: { fotografias: true } } },
        });
        const matches2 = await this.prisma.matchs.findMany({
            where: { usuario2_id: userId, activo: true },
            include: { usuario1: { include: { fotografias: true } } },
        });
        const formattedMatches = [
            ...matches1.map((m) => ({ ...m })),
            ...matches2.map((m) => ({
                id_match: m.id_match,
                usuario1_id: m.usuario1_id,
                usuario2_id: m.usuario2_id,
                activo: m.activo,
                usuario2: m.usuario1,
            }))
        ];
        return formattedMatches;
    }
    async findExistingMatch(userId, targetId) {
        return this.prisma.matchs.findFirst({
            where: {
                OR: [
                    { usuario1_id: userId, usuario2_id: targetId },
                    { usuario1_id: targetId, usuario2_id: userId },
                ]
            }
        });
    }
    async createMatch(data) {
        return this.prisma.matchs.create({
            data: {
                usuario1_id: data.userId,
                usuario2_id: data.targetId,
            },
            include: {
                usuario2: { include: { fotografias: true } }
            }
        });
    }
};
exports.PrismaMatchRepository = PrismaMatchRepository;
exports.PrismaMatchRepository = PrismaMatchRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], PrismaMatchRepository);
//# sourceMappingURL=prisma-match.repository.js.map