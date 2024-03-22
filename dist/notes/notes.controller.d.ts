import { NotesService } from './notes.service';
export declare class NotesController {
    private readonly notesService;
    constructor(notesService: NotesService);
    findOne(id: number): string;
    findAll(): string;
    create(createNotesDto: any): string;
    update(id: number, updateNotes: any): string;
    delete(id: number): string;
}
