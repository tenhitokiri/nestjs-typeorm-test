import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AppService } from './app.service';

@ApiTags('test')
@Controller()
export class AppController {
    // eslint-disable-next-line prettier/prettier
    constructor(private readonly appService: AppService) {}

    @Get()
    getHello() {
        return this.appService.getHello();
    }

    @Get('/other/')
    async getOther() {
        return await this.appService.getOther();
    }
}
