import { ExecutionContext, CanActivate } from '@nestjs/common';
export declare class AdminGuard implements CanActivate {
    canActivate(context: ExecutionContext): Promise<boolean>;
}
