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
exports.MatchService = void 0;
const common_1 = require("@nestjs/common");
const match_repository_1 = require("../domain/match.repository");
let MatchService = class MatchService {
    matchRepository;
    constructor(matchRepository) {
        this.matchRepository = matchRepository;
    }
    async getMatches(userId) {
        if (!userId) {
            throw new common_1.BadRequestException('ID requerido');
        }
        return this.matchRepository.findMatchesByUser(userId);
    }
    async createMatch(data) {
        if (!data.userId || !data.targetId) {
            throw new common_1.BadRequestException('IDs requeridos');
        }
        const existing = await this.matchRepository.findExistingMatch(data.userId, data.targetId);
        if (existing) {
            return { isMatch: true, newMatch: existing, isNew: false };
        }
        const newMatch = await this.matchRepository.createMatch(data);
        return { isMatch: true, newMatch, isNew: true };
    }
};
exports.MatchService = MatchService;
exports.MatchService = MatchService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(match_repository_1.MATCH_REPOSITORY)),
    __metadata("design:paramtypes", [Object])
], MatchService);
//# sourceMappingURL=match.service.js.map