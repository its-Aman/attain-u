import { Controller, Get, Post, Put, Delete, Param, Body, Query, UseGuards, HttpException, HttpStatus } from '@nestjs/common';
import { CONSTANTS, IUser, User, VERSION } from '../utils';
import { PostService } from '../services';
import { PostDto } from '../dtos';
import { JwtAuthGuard, AdminGuard } from '../guard';

@UseGuards(JwtAuthGuard)
@Controller({
  path: CONSTANTS.CONTROLLER.POSTS,
  version: VERSION.ONE,
})
export class PostController {
  constructor(
    private readonly postService: PostService
  ) { }

  @Get()
  get(
    @Query('limit') limit: string,
    @Query('page') page: string,
  ): Promise<{ data: PostDto[], count: number }> {
    try {
      return this.postService.get(limit, page);
    } catch (error) {
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }

  @UseGuards(AdminGuard)
  @Post()
  create(
    @Body('content') postContent: string,
    @User() user: IUser
  ): Promise<PostDto> {
    try {
      return this.postService.create({ createdBy: user.username, content: postContent });
    } catch (error) {
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }

  @UseGuards(AdminGuard)
  @Put(':id')
  update(
    @Param('id') id: string,
    @Body('content') content: string
  ): Promise<PostDto> {
    try {
      return this.postService.update(id, { content });
    } catch (error) {
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }

  @UseGuards(AdminGuard)
  @Delete(':id')
  delete(
    @Param('id') id: string
  ): Promise<PostDto> {
    try {
      return this.postService.delete(id);
    } catch (error) {
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }

}
