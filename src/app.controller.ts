import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ConfigService } from '@nestjs/config';

@Controller({
  path: 'v1',
  version: '1',
})
export class AppController {
  constructor(
    private readonly appService: AppService,
    private configService: ConfigService,
  ) {}

  @Get()
  getHello() {
    return {
      env: this.configService.get('port') as number,
      dbconfig: this.configService.get('dbconfig.dev.type') as string,
    };
  }
}
