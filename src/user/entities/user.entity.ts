import { IsEmail, IsString, MaxLength, MinLength } from 'class-validator';

export class User {
  id?: number;

  @IsEmail()
  email: string;

  @IsString()
  @MinLength(6)
  password: string;

  @IsString()
  @MinLength(2)
  @MaxLength(64)
  name: string;
}
