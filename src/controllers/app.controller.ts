import { Controller, Get, Req } from '@nestjs/common';
import { GeoLocateService } from '@/services/geo-locate.service';
import { MeteoStationService } from '@/services/meteo-station.service';

@Controller()
export class AppController {
  constructor(
    private readonly geoService: GeoLocateService,
    private readonly meteoService: MeteoStationService,
  ) { }

  @Get()
  async apiRoot() {
    return await this.geoService.getCoordinates();
  }

  @Get("nearest")
  async getNearest() {
    return await this.meteoService.findNearest({ lat: 50.00, lng: 14.35 }, 10000);
  }
}
