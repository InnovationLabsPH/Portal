import { Controller, Get, UseGuards } from '@nestjs/common';
import { ProjectService } from './project.service';
import { Project } from './project.schema';
import { JwtAuthGuard } from 'src/auth/jwt.guard';

@Controller('project')
export class ProjectController {
  constructor(
    private readonly projectService: ProjectService
  ) {};

  /**
   * Retrieves all projects from the database
   * @returns An array of Projects in JSON format.
   */
  @Get()
  @UseGuards(JwtAuthGuard)
  async getAllProjects(): Promise<Project[]> {
    return this.projectService.getAllProjects();
  } 

  // db connection test, WILL BE REMOVED
  @Get('/create')
  async createEmptyProject(): Promise<Project> {
    return this.projectService.createEmptyProject();
  } 
}
