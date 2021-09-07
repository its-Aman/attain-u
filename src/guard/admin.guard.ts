import {
  ExecutionContext,
  Injectable,
  CanActivate
} from '@nestjs/common';
import { Request } from 'express';
import { CONSTANTS } from 'src/utils';

@Injectable()
export class AdminGuard implements CanActivate {

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const req: Request = context.switchToHttp().getRequest(),
      user = req.user as any

    return (user.role as string).toLowerCase() == CONSTANTS.ADMIN
  }
}
