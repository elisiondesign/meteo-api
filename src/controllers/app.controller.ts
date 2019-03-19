import { Controller, Get, Req } from '@nestjs/common';
import { MeteoStationService } from '../services/meteo-station.service';
import { MeteoStation } from 'src/entities/meteo-station.entity';
import { GeoLocateService } from '@/services/geo-locate.service';
import { AxiosResponse } from 'axios';

@Controller()
export class AppController {
  constructor(
    private readonly meteoService: MeteoStationService,
    private readonly geoService: GeoLocateService
  ) { }

  @Get()
  getHello() {
    return this.geoService.findIp('234');
  }
  @Get("nearest")
  async getNearest() {
    return await this.meteoService.findNearest();
  }
  @Get("raw")
  async getRaw() {
    return await this.meteoService.rawQuery();
  }
}
