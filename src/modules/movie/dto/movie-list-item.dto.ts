import { Expose, Type } from 'class-transformer';
import { Genre } from '../../../types/genre.type.js';
import UserResponse from '../../user/response/user.response.js';

export default class MovieListItemDto {
  @Expose()
  public id!: string;

  @Expose()
  public title!: string;

  @Expose()
  public publishingDate!: number;

  @Expose()
  public genre!: Genre;

  @Expose()
  public previewPath!: string;

  @Expose()
  @Type(() => UserResponse)
  public user!: UserResponse;

  @Expose()
  public posterPath!: string;

  @Expose()
  public commentsCount!: number;
}
