import { Document } from 'mongoose';
export declare class Post {
    createdBy: string;
    content: string;
}
export declare const PostSchema: import("mongoose").Schema<Document<Post, any, any>, import("mongoose").Model<Document<Post, any, any>, any, any>, undefined, {}>;
export declare type PostDocument = Post & Document;
