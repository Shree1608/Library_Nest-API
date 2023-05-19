import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

import { Document } from "mongoose";

@Schema({
    timestamps : false
})
export class Users extends Document{
    


     @Prop()
     name :string

     @Prop({unique : [true , 'duplicate email entered']})
     email : string

     @Prop()
     password : string

     @Prop({ default : null})
     token : string
     
}

export const UsersSchema = SchemaFactory.createForClass(Users)