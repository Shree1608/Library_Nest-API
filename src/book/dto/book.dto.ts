import { IsEmpty, IsEnum, IsInt, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";
import { Category } from "../schema/book.schema";
import { Type } from "class-transformer";
import { Users } from "../../users/schema/user.schema";
export class CreateBookDto {

    @IsNotEmpty()
    @IsString()
    readonly title : string;

    @IsNotEmpty()
    @IsString()
    readonly description : string;

    readonly author : string;

    @IsNotEmpty()
    @IsInt()
    @Type(() => Number)
    readonly price : number;

    @IsOptional()
    @IsEnum(Category, { message :'please enter correct category'})
    @IsString()
    readonly category : Category ;
     
    @IsEmpty({ message :' you cannot pass user id'})
    readonly user : Users
}