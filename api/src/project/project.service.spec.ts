import { Test, TestingModule } from '@nestjs/testing';
import { ProjectService } from './project.service';
import { getModelToken } from '@nestjs/mongoose';
import { Project } from './project.schema';

describe('ProjectService', () => {
  let service: ProjectService;
  let mockProjectModel = {
    find: jest.fn().mockReturnValue([]),
    save: jest.fn(),
  }

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ProjectService,
        {
          provide: getModelToken(Project.name),
          useValue: mockProjectModel,
        },
      ],
    }).compile();

    service = module.get<ProjectService>(ProjectService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return all projects', async () => {
    const result = await service.getAllProjects()
    expect(result).toEqual([]);
    expect(mockProjectModel.find).toHaveBeenCalled();
  });
});
