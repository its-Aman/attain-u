import {
  HttpException,
  HttpStatus,
  Injectable,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ILoginCredentials, Messages } from '../utils';

@Injectable()
export class AuthService {
  constructor(
    private readonly _jwtService: JwtService,
  ) { }

  async login(credentials: ILoginCredentials) {

    if (!credentials)
      throw new HttpException(
        Messages.Credentials_Are_Missing,
        HttpStatus.BAD_REQUEST,
      );

    const { username, password, role } = credentials,
      errors = []

    if (!username)
      errors.push(Messages.Username_Is_Missing)

    if (!password)
      errors.push(Messages.Password_Is_Missing)

    if (errors.length)
      throw new HttpException(errors, HttpStatus.BAD_REQUEST);

    const token = this._jwtService.sign({ sub: username, role });
    return { token, user: { username, role } };
  }
}
