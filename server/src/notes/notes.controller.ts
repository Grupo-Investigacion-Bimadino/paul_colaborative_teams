import {
    Controller,
    Get,
    Post,
    Body,
    Param,
    Put,
    Delete,
    Patch,
  } from '@nestjs/common';
  import { NotesService } from './notes.service';
  
  @Controller('notess')
  export class NotesController {
    constructor(private readonly notesService: NotesService) {}
    // find one by id findOne(id)
    @Get(':id')
    findOne(@Param('id') id: number): string {
      return this.notesService.findOne(id);
    }
  
    @Get()
    findAll(): string {
      return this.notesService.findAll();
    }
  
    @Post()
    create(@Body() createNotesDto): string {
      return this.notesService.create(createNotesDto);
    }
  
    @Patch(':id')
    update(@Param('id') id: number, @Body() updateNotes): string {
      return this.notesService.update(id, updateNotes);
    }
  
    @Delete(':id')
    delete(@Param('id') id: number): string {
      return this.notesService.delete(id);
    }
  }
  