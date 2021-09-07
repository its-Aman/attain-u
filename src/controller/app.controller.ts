import { Controller, Get } from '@nestjs/common';
import { VERSION } from '../utils';
import { AppService } from '../services';

@Controller({
  version: VERSION.ONE,
})
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  sayHello(): string {
    return this.appService.sayHello();
  }
}
