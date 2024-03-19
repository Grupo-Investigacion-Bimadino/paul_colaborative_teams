import { Injectable } from '@nestjs/common';

@Injectable()
export class NotesService {
  private notes: any[] = [];

  findOne(id: number): string {
    return `Get notes with id ${id}`;
  }

  findAll(): string {
    return 'Get all notes';
  }

  create(createNotesDto): string {
    this.notes.push(createNotesDto);
    return 'Notes created successfully';
  }

  update(id, updateNotes): string {
    return 'Notes updated successfully';
  }

  delete(id): string {
    return 'Notes deleted successfully';
  }
}
