import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';

/**
 * @module DatabaseModule
 *
 * Manages dabatase connection.
 *
 * - Might be removed and moved into app module instead since it really doesnt do anything else atm.
 */
@Module({
  imports:  [
    // load env file global
    ConfigModule.forRoot(
      {isGlobal: true},
    ),   
    // connect to mongodb
    MongooseModule.forRoot(process.env.MONGO_URI || 'mongodb://localhost:27017'),
  ],
})
export class DatabaseModule {}
