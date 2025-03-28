import {Schema, Document} from 'mongoose'

export const ProjectSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  participants: {type: [String]},
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
});

export interface Project extends Document {
  id: string;
  name: string;
  description: string;
  participants: string[];
  startDate: Date;
  endDate: Date;
}
