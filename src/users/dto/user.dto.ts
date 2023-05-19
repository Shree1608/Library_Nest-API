import { IsEmail, IsNotEmpty, IsString } from "class-validator";


export class CreateUserDto {
    
    readonly name : string ;

    @IsNotEmpty()
    @IsString()
    @IsEmail()
    readonly email : string ;

    @IsNotEmpty()
    @IsString()
    readonly password : string
}