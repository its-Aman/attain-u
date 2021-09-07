import { Document } from 'mongoose';
export declare class User {
    email: string;
    hashedPassword: string;
}
export declare const UserSchema: import("mongoose").Schema<Document<User, any, any>, import("mongoose").Model<Document<User, any, any>, any, any>, undefined, {}>;
export declare type UserDocument = User & Document;
