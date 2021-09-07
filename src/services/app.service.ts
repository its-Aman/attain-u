import { Injectable } from '@nestjs/common';
import { Messages } from '../utils';

@Injectable()
export class AppService {
  sayHello(): string {
    return Messages.Hi;
  }
}
