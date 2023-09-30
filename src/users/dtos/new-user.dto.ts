import {UserDtoInterface} from "./user.dto.interface";
import {IsEmail, IsString} from "class-validator"

export class NewUserDto implements UserDtoInterface {
    @IsEmail()
    email: string

    @IsString()
    password: string
}