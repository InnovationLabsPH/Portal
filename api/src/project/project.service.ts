import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Project } from './project.schema';
import { Model } from 'mongoose';

@Injectable()
export class ProjectService {
  constructor(
    @InjectModel(Project.name) private ProjectModel: Model<Project>
  ) {}

  /**
   * Retrieves all projects from the database
   * @returns A promise that resolves to an array of Project objects.
   */
  async getAllProjects(): Promise<Project[]>{
    return this.ProjectModel.find();
  }

  // db connection test for insert, WILL BE REMOVED
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
