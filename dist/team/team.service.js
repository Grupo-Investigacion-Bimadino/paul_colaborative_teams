"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamService = void 0;
const common_1 = require("@nestjs/common");
let TeamService = class TeamService {
    constructor() {
        this.teams = [];
    }
    findOne(id) {
        return `Get team with id ${id}`;
    }
    findAll() {
        return 'Get all teams';
    }
    create(createTeamDto) {
        this.teams.push(createTeamDto);
        return 'Team created successfully';
    }
    update(id, updateTeam) {
        return 'Team updated successfully';
    }
    delete(id) {
        return 'Team deleted successfully';
    }
};
exports.TeamService = TeamService;
exports.TeamService = TeamService = __decorate([
    (0, common_1.Injectable)()
], TeamService);
//# sourceMappingURL=team.service.js.map