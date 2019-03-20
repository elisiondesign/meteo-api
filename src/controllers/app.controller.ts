import { Controller, Get, Req } from '@nestjs/common';
import { MeteoStationService } from '../services/meteo-station.service';
import { GeoLocateService } from '@/services/geo-locate.service';

@Controller()
export class AppController {
  constructor(
    private readonly meteoService: MeteoStationService,
    private readonly geoService: GeoLocateService
  ) { }

  @Get()
  async getHello() {
    return await this.geoService.locateIp('asdf');    
  }
}
