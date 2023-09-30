import {Expose} from "class-transformer";

export class PublicViewUserDto {
    @Expose()
    id: number;

    @Expose()
    email: string;
}