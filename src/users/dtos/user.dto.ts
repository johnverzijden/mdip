import {UserDtoInterface} from "./user.dto.interface";
import {IsString, IsEmail, IsOptional} from "class-validator";

export class UserDto implements UserDtoInterface {
    @IsEmail()
    @IsOptional()
    email: string;

    @IsString()
    @IsOptional()
    password: string;
}