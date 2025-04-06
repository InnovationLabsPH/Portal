import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'

@Schema() // tells nest that this is a schema
export class Project extends Document {
  @Prop({required: true}) // short for property
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
