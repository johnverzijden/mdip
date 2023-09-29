import {Body, Controller, Post, Get, Param, Query, Delete} from '@nestjs/common';
import {NewUserDto} from "./dtos/new-user.dto";
import {UsersService} from "./users.service";

@Controller('auth')
export class UsersController {
    constructor(
        private userService: UsersService
    ) {}
    @Post('signup')
    async CreateUser(@Body() body: NewUserDto) {
        await this.userService.create(body.email, body.password)
    }

    @Get('/:id')
    findUser(@Param('id') id: string) {
        return this.userService.findOne(parseInt(id));
    }

    @Get()
    find(@Query('email') email: string) {
        return this.userService.find(email);
    }

    @Delete('/:')
    delete(@Param('id') id: string) {
        return this.userService.remove(parseInt(id));
    }
}
