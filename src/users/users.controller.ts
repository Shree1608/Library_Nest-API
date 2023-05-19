import { Body, Controller , Post, Get,UseGuards, Req } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/user.dto';

import { AccessTokenGuard } from 'src/auth/guard/accessToken.guard';
import { Users } from './schema/user.schema';
import { Request } from 'express';




@Controller('users')
export class UsersController {
    constructor(private userService : UsersService){}

    @Post('signup')
    async signUp(@Body() userdto : CreateUserDto): Promise <Users> {
        return this.userService.signUp(userdto)
    }
    @Post('login')
    async login(@Body() userdto : CreateUserDto): Promise <{token : string}> { 
        return this.userService.login(userdto)
    }
    
    @UseGuards(AccessTokenGuard)
    @Post('logout')
    async logout(@Req()  req :Request){
        return this.userService.logout(req.user['id'])
    }

}
