import { AppService } from '../services';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    sayHello(): string;
}
