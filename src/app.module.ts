import { Module, HttpModule } from '@nestjs/common';
import { AppController } from './controllers/app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MeteoStationService } from './services/meteo-station.service';
import { MeteoStation } from './entities/meteo-station.entity';
import { GeoLocateService } from './services/geo-locate.service';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    TypeOrmModule.forFeature([MeteoStation]), // See ormconfig.json
    HttpModule,
  ],
  controllers: [AppController],
  providers: [MeteoStationService, GeoLocateService],
})
export class AppModule { }
