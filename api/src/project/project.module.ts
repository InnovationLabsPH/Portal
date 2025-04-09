import { Module } from '@nestjs/common';
import { ProjectController } from './project.controller';
import { ProjectService } from './project.service';
import { Project, ProjectSchema } from './project.schema'
import { MongooseModule } from '@nestjs/mongoose';

/**
 * @module ProjectModule
 *
 * This module is responsible for managing projects within the application.
 * It handles logic related to creating, retrieving, updating, and deleting projects.
 *
 */
@Module({
  imports: [
    MongooseModule.forFeature([{ name: Project.name, schema: ProjectSchema }]),
  ],
  controllers: [ProjectController],
  providers: [ProjectService]
})
export class ProjectModule {}
