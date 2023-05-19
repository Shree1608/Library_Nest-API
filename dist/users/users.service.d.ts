/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
import { JwtService } from '@nestjs/jwt';
import { Model } from 'mongoose';
import { Users } from './schema/user.schema';
import { CreateUserDto } from './dto/user.dto';
export declare class UsersService {
    private readonly userModel;
    private readonly jwtService;
    constructor(userModel: Model<Users>, jwtService: JwtService);
    signUp(createUserDto: CreateUserDto): Promise<Users>;
    login(createUserDto: CreateUserDto): Promise<{
        token: string;
    }>;
    logout(user: any): Promise<import("mongoose").Document<unknown, {}, Users> & Omit<Users & {
        _id: import("mongoose").Types.ObjectId;
    }, never>>;
}
