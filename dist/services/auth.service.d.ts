import { JwtService } from '@nestjs/jwt';
import { ILoginCredentials } from '../utils';
export declare class AuthService {
    private readonly _jwtService;
    constructor(_jwtService: JwtService);
    login(credentials: ILoginCredentials): Promise<{
        token: string;
        user: {
            username: string;
            role: string;
        };
    }>;
}
