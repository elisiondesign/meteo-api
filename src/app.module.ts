import { Module } from '@nestjs/common';
import { AppController } from './controllers/app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MeteoStationService } from './services/meteo-station.service';
import { MeteoStation } from './entities/meteo-station.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    TypeOrmModule.forFeature([MeteoStation])// See ormconfig.json
  ],
  controllers: [AppController],
  providers: [MeteoStationService],
})
export class AppModule { }
