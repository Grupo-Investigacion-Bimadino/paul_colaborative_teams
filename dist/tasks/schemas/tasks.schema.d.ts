/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
import { Document, Types } from 'mongoose';
import * as mongoose from 'mongoose';
export declare class Task extends Document {
    _id: Types.ObjectId;
    name: string;
    creationDate: Date;
    author: string;
    notes: string;
    responsible: string;
    reminderDate: Date;
    reminderMessage: string;
    deliverDate: Date;
}
export declare const TaskSchema: mongoose.Schema<Task, mongoose.Model<Task, any, any, any, Document<unknown, any, Task> & Task & Required<{
    _id: Types.ObjectId;
}>, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Task, Document<unknown, {}, mongoose.FlatRecord<Task>> & mongoose.FlatRecord<Task> & Required<{
    _id: Types.ObjectId;
}>>;
