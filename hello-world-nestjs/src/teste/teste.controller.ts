import {Controller, Get} from '@nestjs/common';
import {AppService} from "../app.service";

@Controller('hello')
export class TesteController {
    constructor(private appService: AppService) {
    }

    @Get("/")
    index() {
        return `${this.appService.getHello()} Gustavera`;
    }
}
