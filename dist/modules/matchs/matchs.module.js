"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MatchsModule = void 0;
const common_1 = require("@nestjs/common");
const matchs_controller_1 = require("./matchs.controller");
const match_service_1 = require("./application/match.service");
const prisma_match_repository_1 = require("./infrastructure/prisma-match.repository");
const match_repository_1 = require("./domain/match.repository");
let MatchsModule = class MatchsModule {
};
exports.MatchsModule = MatchsModule;
exports.MatchsModule = MatchsModule = __decorate([
    (0, common_1.Module)({
        controllers: [matchs_controller_1.MatchsController],
        providers: [
            match_service_1.MatchService,
            {
                provide: match_repository_1.MATCH_REPOSITORY,
                useClass: prisma_match_repository_1.PrismaMatchRepository,
            },
        ],
    })
], MatchsModule);
//# sourceMappingURL=matchs.module.js.map