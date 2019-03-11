import { Module } from '@nestjs/common';
import { AppController } from './controllers/app.controller';
import { AppService } from './services/app.service';
import {TypeOrmModule} from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot() // See ormconfig.json
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
