import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import * as mongoose from 'mongoose';


@Schema({
    timestamps: true,
})

export class Team extends Document {
    _id: mongoose.Types.ObjectId;

    @Prop({ type: String, })
    name: string;

    @Prop({ type: String })
    logo: string;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Usuarios', default: null })
    usuarios: Usuarios;
}

export const TeamSchema = SchemaFactory.createForClass(Team);