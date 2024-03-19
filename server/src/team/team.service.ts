import { Injectable } from '@nestjs/common';

@Injectable()
export class TeamService {
  private teams: any[] = [];

  findOne(id: number): string {
    return `Get team with id ${id}`;
  }

  findAll(): string {
    return 'Get all teams';
  }

  create(createTeamDto): string {
    this.teams.push(createTeamDto);
    return 'Team created successfully';
  }

  update(id, updateTeam): string {
    return 'Team updated successfully';
  }

  delete(id): string {
    return 'Team deleted successfully';
  }
}
