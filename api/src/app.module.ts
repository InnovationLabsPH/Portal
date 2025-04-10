import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProjectModule } from './project/project.module';
import { DatabaseModule } from './database/database.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ProjectModule,
    DatabaseModule,
    AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
