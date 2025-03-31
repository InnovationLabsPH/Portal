import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'

@Schema()
export class Project extends Document {
  @Prop({required: true})
  name: string;

  @Prop({required: true})
  description: string;

  @Prop({type: [String], default: []})
  participants: string[];

  @Prop({required: true})
  startDate: Date;

  @Prop({required: true})
  endDate: Date;
}

export const ProjectSchema = SchemaFactory.createForClass(Project);
