import { Injectable ,UnauthorizedException} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Users } from './schema/user.schema';
import { CreateUserDto } from './dto/user.dto';
import * as bcrypt from 'bcrypt'


@Injectable()
export class UsersService {
    constructor (@InjectModel('Users')
    private readonly userModel : Model<Users>,
    private readonly jwtService : JwtService){}

    async signUp(createUserDto:CreateUserDto) : Promise<Users>{
        const { name , email , password} = createUserDto
        const findemail = await this.userModel.findOne({email})
        if(findemail){
            throw new UnauthorizedException('email already exists')
        }
        const hashPassword = await bcrypt.hash(password , 10)
        const user = await this.userModel.create({
            name ,
            email ,
            password: hashPassword
        })
        return user
    }
    async login(createUserDto : CreateUserDto):Promise <{token : string}>{
        const { email , password} = createUserDto
        const user = await this.userModel.findOne({email:email})
        if(!user){
            throw new UnauthorizedException('invalid email ')
        }
        const isPass = await bcrypt.compare(password , user.password)
        if(!isPass){
            throw new UnauthorizedException('invalid password ')
        }
        const token = this.jwtService.sign({id : user._id})
        await this.userModel.findByIdAndUpdate(user._id , {token:token})
        return {token}
    }
    async logout(user ){
        console.log(user._id); 
        return this.userModel.findByIdAndUpdate(user._id ,{token : null},{new : true});
    }
}