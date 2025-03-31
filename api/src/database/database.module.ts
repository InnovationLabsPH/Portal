import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DatabaseService } from './database.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports:  [
    // load env file global
    ConfigModule.forRoot(
      {isGlobal: true},
    ),   
    // connect to mongodb
    MongooseModule.forRoot(process.env.MONGO_URI || 'mongodb://localhost:27017'),
  ],
  providers: [DatabaseService]
})
export class DatabaseModule {}
