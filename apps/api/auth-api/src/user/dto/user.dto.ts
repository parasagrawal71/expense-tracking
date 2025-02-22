import { IsInt, IsString } from 'class-validator';

export class UserDto {
  @IsString()
  name: string;

  @IsString()
  username: string;

  @IsString()
  email: string;

  @IsInt()
  age: number;

  @IsString()
  gender: string;
}
