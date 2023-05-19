import { Injectable, UnauthorizedException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { PassportStrategy } from "@nestjs/passport";
import { Model } from "mongoose";
import { type } from "os";
import { ExtractJwt, Strategy } from "passport-jwt";
import { Users } from "src/users/schema/user.schema";


@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy){
    constructor (
        @InjectModel('Users')
        private userModel : Model<Users>
    ){
        super({
            jwtFromRequest : ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey : process.env.JWT_SECRET
        })
    }

    async validate(payload){
        const { id } = payload ;
        const user = await this.userModel.findById(id)
        if(!user){
            throw new UnauthorizedException('login first');
        } 
        return user;
    }
}