import { Controller, Get, Query, Req } from '@nestjs/common';
import { GeoLocateService } from '@/services/geo-locate.service';
import { MeteoStationService } from '@/services/meteo-station.service';
import NearestStations from '@/interfaces/nearest-stations.interface';
import { Request } from 'express';

@Controller()
export class AppController {
  constructor(
    private readonly geoService: GeoLocateService,
    private readonly meteoService: MeteoStationService,
  ) { }

  @Get()
  async apiRoot() {
    return await this.meteoService.findAll();
  }

  @Get("nearest")
  async getNearest(@Query() query: NearestStations, @Req() request: Request) {
    let location = { lat: query.lat, lng: query.lng };
    if (location.lat === undefined || location.lng === undefined) {
      const ipAddress = request.connection.remoteAddress;
      console.log(ipAddress);
      location = await this.geoService.getIpLocation(ipAddress);
    }
    return await this.meteoService.findNearest(location, query.radius, query.filter);
  }
}
