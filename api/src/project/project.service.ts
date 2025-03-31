import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Project } from './project.schema';
import { Model } from 'mongoose';

@Injectable()
export class ProjectService {
  constructor(@InjectModel(Project.name) private ProjectModel: Model<Project>) {}

  async getAllProjects(): Promise<Project[]>{
    return this.ProjectModel.find().exec();
  }

  // db connection test
  async createEmptyProject(): Promise<Project> {
    const newProject = new this.ProjectModel({
      name: 'Test Project',
      description: 'This is a test project',
      participants: ['Kyle', 'JD', 'Kenneth'],
      startDate: new Date(),
      endDate: new Date()
    })

    return newProject.save();
  }
}
