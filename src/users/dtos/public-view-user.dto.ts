import {UserDtoInterface} from "./user.dto.interface";
import {Expose} from "class-transformer";

export class PublicViewUserDto implements UserDtoInterface {
    @Expose()
    id: number;

    @Expose()
    email: string;
}