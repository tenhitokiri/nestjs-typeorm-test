import { Injectable } from '@nestjs/common';
import fetch from 'cross-fetch';

@Injectable()
export class AppService {
    getHello(): string {
        return 'Hello World!';
    }
    async getOther() {
        const opts = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
        };
        const url = process.env.REMOTE || 'http://localhost:3100';
        console.log(`fetching: ${url}`);
        const response = await fetch(url, opts);
        /*             .then(response => response.json())
            .catch(err => {
                throw err;
            });
 */ return response;
    }
}
