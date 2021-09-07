import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Post {
  @Prop({ required: true })
  createdBy: string;

  @Prop({ required: true })
  content: string;
}

export const PostSchema = SchemaFactory.createForClass(Post);

export type PostDocument = Post & Document;
