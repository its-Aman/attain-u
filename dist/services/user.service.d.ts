import { Model } from 'mongoose';
import { UserDocument } from '../schemas';
export declare class UserService {
    private readonly userModel;
    constructor(userModel: Model<UserDocument>);
    get(_id?: string): import("mongoose").Query<UserDocument[], UserDocument, {}, UserDocument> | import("mongoose").Query<UserDocument, UserDocument, {}, UserDocument>;
}
