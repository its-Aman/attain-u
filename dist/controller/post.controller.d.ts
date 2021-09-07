import { IUser } from '../utils';
import { PostService } from '../services';
import { PostDto } from '../dtos';
export declare class PostController {
    private readonly postService;
    constructor(postService: PostService);
    get(limit: string, page: string): Promise<{
        data: PostDto[];
        count: number;
    }>;
    create(postContent: string, user: IUser): Promise<PostDto>;
    update(id: string, content: string): Promise<PostDto>;
    delete(id: string): Promise<PostDto>;
}
