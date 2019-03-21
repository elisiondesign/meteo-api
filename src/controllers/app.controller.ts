import { Controller, Get, Req } from '@nestjs/common';
import { GeoLocateService } from '@/services/geo-locate.service';

@Controller()
export class AppController {
  constructor(    
    private readonly geoService: GeoLocateService
  ) { }

  @Get()
  async main() {
    return await this.geoService.getCoordinates();
  }
}
