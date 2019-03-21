import { Controller, Get, Query } from '@nestjs/common';
import { GeoLocateService } from '@/services/geo-locate.service';
import { MeteoStationService } from '@/services/meteo-station.service';
import NearestStations from '@/interfaces/nearest-stations.interface';

@Controller()
export class AppController {
  constructor(
    private readonly geoService: GeoLocateService,
    private readonly meteoService: MeteoStationService,
  ) { }

  @Get()
  async apiRoot() {
    return "Meteo stations API."
  }

  @Get("nearest")
  async getNearest(@Query() query: NearestStations) {    
    const location = await this.geoService.getCoordinates();
    return await this.meteoService.findNearest(location, 10000);
  }
}
