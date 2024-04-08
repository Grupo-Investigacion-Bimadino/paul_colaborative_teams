import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Types } from 'mongoose';

@Schema({ timestamps: true })
export class User extends Document {
  @Prop({ type: Types.ObjectId })
  _id: Types.ObjectId;
}
console.log(Prop)
export const UserSchema = SchemaFactory.createForClass(User);
