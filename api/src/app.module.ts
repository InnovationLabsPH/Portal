import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProjectModule } from './project/project.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    // loading env file
    ConfigModule.forRoot(),   
    // connect to mongodb
    MongooseModule.forRoot(process.env.MONGO_URI || 'mongodb://localhost:27017'),
    ProjectModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
