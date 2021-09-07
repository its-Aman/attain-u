import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PostDto } from '../dtos';
import { Post, PostDocument } from '../schemas';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Messages, CONSTANTS } from '../utils';

@Injectable()
export class PostService {

  constructor(
    @InjectModel(Post.name) private readonly postModel: Model<PostDocument>
  ) { }

  async get(limit: string, page: string): Promise<{ data: PostDto[], count: number }> {

    if (!CONSTANTS.NUMBER_REGEX.test(limit))
      limit = '10'

    if (!CONSTANTS.NUMBER_REGEX.test(page))
      page = '1'

    const _limit = parseInt(limit),
      _page = parseInt(page),
      query = this.postModel.find(),
      skip = (_page - 1) * _limit

    query.skip(skip)
    query.limit(_limit)
    query.lean()

    const data = await query.exec(),
      count = await this.postModel.countDocuments()
    return { data, count }
  }

  async create(post: PostDto): Promise<PostDto> {
    if (this.postContentLengthGreaterThenLimit(post.content, CONSTANTS.POST_CONTENT_LIMIT))
      throw new HttpException(Messages.Length_Error, HttpStatus.BAD_REQUEST)

    return this.postModel.create(post)
  }

  async update(id: string, post: Partial<PostDto>): Promise<PostDto> {
    const isPresent = await this.postModel.findById(id)

    if (!isPresent)
      throw new HttpException(Messages.Post_Not_Found, HttpStatus.NOT_FOUND)

    if (this.postContentLengthGreaterThenLimit(post.content, CONSTANTS.POST_CONTENT_LIMIT))
      throw new HttpException(Messages.Length_Error, HttpStatus.BAD_REQUEST)

    return this.postModel.findByIdAndUpdate(id, post, { new: true })
  }

  async delete(id: string): Promise<PostDto> {
    const isPresent = await this.postModel.findById(id)

    if (!isPresent)
      throw new HttpException(Messages.Post_Not_Found, HttpStatus.NOT_FOUND)

    return this.postModel.findByIdAndDelete(id)
  }

  private postContentLengthGreaterThenLimit(content: string, limit: number): boolean {
    return content.length > limit
  }

}