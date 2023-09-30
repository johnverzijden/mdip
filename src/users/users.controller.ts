import {
    Body,
    Controller,
    Post,
    Get,
    Param,
    Query,
    Delete,
    Patch,
    NotFoundException,
    UseInterceptors,
    // ClassSerializerInterceptor
} from '@nestjs/common';
import {NewUserDto} from "./dtos/new-user.dto";
import {UserDto} from "./dtos/user.dto";
import {UsersService} from "./users.service";
import {SerializeInterceptor} from "../Interceptors/serialize.interceptor";

@Controller('auth')
export class UsersController {
    constructor(
        private userService: UsersService
    ) {
    }

    @Post('signup')
    async CreateUser(@Body() body: NewUserDto) {
        await this.userService.create(body.email, body.password)
    }

    //if exclude in the user.entity: @UseInterceptors(ClassSerializerInterceptor)
    @UseInterceptors(SerializeInterceptor)
    @Get('/:id')
    async findUser(@Param('id') id: string) {
        console.log('Handler is running')
        const user = await this.userService.findOne(parseInt(id));
        if (!user) {
            throw new NotFoundException('User not found')
        }

        return user;
    }

    @Get()
    find(@Query('email') email: string) {
        return this.userService.find(email);
    }

    @Delete('/:id')
    delete(@Param('id') id: string) {
        return this.userService.remove(parseInt(id));
    }

    @Patch('/:id')
    update(@Param('id') id: string, @Body() body: UserDto) {
        return this.userService.update(parseInt(id), body);
    }
}
