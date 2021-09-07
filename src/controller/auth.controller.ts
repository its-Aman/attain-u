import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from '../services';
import { ILoginCredentials, VERSION, CONSTANTS } from '../utils';

@Controller({
  path: CONSTANTS.CONTROLLER.AUTH,
  version: VERSION.ONE,
})
export class AuthController {
  constructor(private _authService: AuthService) { }

  @Post('login')
  login(
    @Body('credentials') loginCredentials: ILoginCredentials
  ) {
    return this._authService.login(loginCredentials);
  }

}
