/// <reference types="mongoose" />
import { UserService } from '../services';
export declare class UserController {
    private _userService;
    constructor(_userService: UserService);
    getUsers(): import("mongoose").Query<import("../schemas").UserDocument[], import("../schemas").UserDocument, {}, import("../schemas").UserDocument> | import("mongoose").Query<import("../schemas").UserDocument, import("../schemas").UserDocument, {}, import("../schemas").UserDocument>;
    getUser(userId: string): import("mongoose").Query<import("../schemas").UserDocument[], import("../schemas").UserDocument, {}, import("../schemas").UserDocument> | import("mongoose").Query<import("../schemas").UserDocument, import("../schemas").UserDocument, {}, import("../schemas").UserDocument>;
}
