import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FormsModule } from './forms/forms.module';

// Registering Config and Mongoose Modules
// Config module to load env variables
// Initializing MongoDB with connection string
// Regsitering FormsModule
@Module({
  imports: [ConfigModule.forRoot(), MongooseModule.forRoot(process.env.DB_URI), FormsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
