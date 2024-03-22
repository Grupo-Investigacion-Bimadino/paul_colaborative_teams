import { TeamService } from './team.service';
export declare class TeamController {
    private readonly teamService;
    constructor(teamService: TeamService);
    findOne(id: number): string;
    findAll(): string;
    create(createTeamDto: any): string;
    update(id: number, updateTeam: any): string;
    delete(id: number): string;
}
