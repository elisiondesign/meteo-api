import { Injectable, HttpService } from '@nestjs/common';
import { Coordinates } from '@/models/coordinates.model';

@Injectable()
export class GeoLocateService {
    constructor(
        private readonly http: HttpService,
    ) { }

    async locateIp(ip: string = ''): Promise<Coordinates> {
        try {
            // Note: ip-api returns 200 OK even on invalid requests.
            const data = await this.http.get(`http://ip-api.com/json/${ip}`).toPromise();    
            console.log(data.data);
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
