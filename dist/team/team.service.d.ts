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
import { Model } from 'mongoose';
import { Team } from './schemas/team.schema';
export declare class TeamService {
    private teamModel;
    constructor(teamModel: Model<Team>);
    findOne(id: string): Promise<import("mongoose").Document<unknown, {}, Team> & Team & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>>;
    findAll(): Promise<(import("mongoose").Document<unknown, {}, Team> & Team & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>)[]>;
    create(createTeamDto: any): Promise<import("mongoose").Document<unknown, {}, Team> & Team & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>>;
    update(id: any, updateTeam: any): import("mongoose").Query<import("mongoose").Document<unknown, {}, Team> & Team & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>, import("mongoose").Document<unknown, {}, Team> & Team & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>, {}, Team, "findOneAndUpdate">;
    delete(id: any): import("mongoose").Query<import("mongoose").Document<unknown, {}, Team> & Team & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>, import("mongoose").Document<unknown, {}, Team> & Team & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>, {}, Team, "findOneAndDelete">;
}
