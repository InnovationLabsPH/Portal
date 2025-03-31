import { Controller, Get } from '@nestjs/common';
import { ProjectService } from './project.service';
import { Project } from './project.schema';

@Controller('project')
export class ProjectController {
  // constructor to load the services
  constructor(private readonly projectService: ProjectService) {};

  @Get()
  async getAllProjects(): Promise<Project[]> {
    // inject the services
    return this.projectService.getAllProjects();
  } 

  // deb connection test
  @Get('/create')
  async createEmptyProject(): Promise<Project> {
    return this.projectService.createEmptyProject();
  } 
}
