import { Injectable, HttpService } from '@nestjs/common';
import { Coordinates } from '@/interfaces/coordinates.interface';
import { CacheService } from './cache.service';

@Injectable()
export class GeoLocateService {
    constructor(
        private readonly http: HttpService,
        private readonly cache: CacheService,
    ) { }

    async getCoordinates(ip: string = ''): Promise<Coordinates> {
        const cachedValue = this.cache.get(ip) as Coordinates;
        if (cachedValue) {            
            return cachedValue;
        }
        else {
            const coordinates = await this.locateIp();
            this.cache.set(ip, coordinates);
            return coordinates;
        }
    }

    private async locateIp(ip: string = ''): Promise<Coordinates> {        
        try {
            // Note: ip-api returns 200 OK even on invalid requests.
            const data = await this.http.get(`http://ip-api.com/json/${ip}`).toPromise();            
            const point = {
                lat: data['data'].lat,
                lng: data['data'].lon,
            };
            return point;
        }
        catch {
            throw new Error('IP location service request failed.');
        }
    }
}
