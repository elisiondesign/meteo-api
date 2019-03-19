import { Injectable, HttpService } from '@nestjs/common';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable()
export class GeoLocateService {
    constructor(
        private readonly http: HttpService,
    ) { }
    
    findIp(ip: string): object {
        return this.http.get('http://ip-api.com/json/').pipe(
            map(response => response.data)
        );
    }
}
