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
exports.NotesService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
const notes_shemas_1 = require("./schemas/notes.shemas");
const mongoose_2 = require("@nestjs/mongoose");
let NotesService = class NotesService {
    findOne(id) {
        throw new Error('Method not implemented.');
    }
    constructor(noteModel) {
        this.noteModel = noteModel;
    }
    async findAll() {
        return await this.noteModel.find().exec();
    }
    async findById(id) {
        return await this.noteModel.findById(id).exec();
    }
    async create(createNoteDto) {
        const createdNote = new this.noteModel(createNoteDto);
        return await createdNote.save();
    }
    async update(id, updateNoteDto) {
        return await this.noteModel.findByIdAndUpdate(id, updateNoteDto, { new: true }).exec();
    }
    async delete(id) {
        return await this.noteModel.findByIdAndDelete(id).exec();
    }
};
exports.NotesService = NotesService;
exports.NotesService = NotesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_2.InjectModel)(notes_shemas_1.Note.name)),
    __metadata("design:paramtypes", [mongoose_1.Model])
], NotesService);
//# sourceMappingURL=notes.service.js.map