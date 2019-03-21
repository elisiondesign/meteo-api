import { Injectable } from '@nestjs/common';
import * as NodeCache from 'node-cache';

@Injectable()
export class CacheService {

    private cache: NodeCache;

    constructor() {
        this.cache = new NodeCache();
    }

    get(key: string | number) {
        return this.cache.get(key);
    }

    set(key: string | number, value: any) {
        this.cache.set(key, value);
    }

    delete(keys: string | number | []) {
        this.cache.del(keys);
    }

    flush() {
        this.cache.flushAll();
    }
}

