"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotesService = void 0;
const common_1 = require("@nestjs/common");
let NotesService = class NotesService {
    constructor() {
        this.notes = [];
    }
    findOne(id) {
        return `Get notes with id ${id}`;
    }
    findAll() {
        return 'Get all notes';
    }
    create(createNotesDto) {
        this.notes.push(createNotesDto);
        return 'Notes created successfully';
    }
    update(id, updateNotes) {
        return 'Notes updated successfully';
    }
    delete(id) {
        return 'Notes deleted successfully';
    }
};
exports.NotesService = NotesService;
exports.NotesService = NotesService = __decorate([
    (0, common_1.Injectable)()
], NotesService);
//# sourceMappingURL=notes.service.js.map