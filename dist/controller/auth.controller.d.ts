import { AuthService } from '../services';
import { ILoginCredentials } from '../utils';
export declare class AuthController {
    private _authService;
    constructor(_authService: AuthService);
    login(loginCredentials: ILoginCredentials): Promise<{
        token: string;
        user: {
            username: string;
            role: string;
        };
    }>;
}
