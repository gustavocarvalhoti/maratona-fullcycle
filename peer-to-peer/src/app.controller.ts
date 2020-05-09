import { Controller, Get, Res } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('')
  home(@Res() res): string {
    const info = {
      'info': 'Maratona Fullcyle 2.0',
      'pages': ['http://localhost:3000/receiver', 'http://localhost:3000/sender']
    }

    return res.send(info);
  }

  @Get('sender')
  send(@Res() res): string {
    return res.sendFile('send.html', {
      root: 'views'
    });
  }

  @Get('receiver')
  receive(@Res() res): string {
    return res.sendFile('receive.html', {
      root: 'views'
    });
  }
}
