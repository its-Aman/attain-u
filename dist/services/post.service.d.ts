import { PostDto } from '../dtos';
import { PostDocument } from '../schemas';
import { Model } from 'mongoose';
export declare class PostService {
    private readonly postModel;
    constructor(postModel: Model<PostDocument>);
    get(limit: string, page: string): Promise<{
        data: PostDto[];
        count: number;
    }>;
    create(post: PostDto): Promise<PostDto>;
    update(id: string, post: Partial<PostDto>): Promise<PostDto>;
    delete(id: string): Promise<PostDto>;
    private postContentLengthGreaterThenLimit;
}
