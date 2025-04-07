import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';

/**
 * @module DatabaseModule
 *
 * Manages database connection.
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
