import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose from "mongoose";
import { Users } from "../../users/schema/user.schema";


export enum Category {
    ADVENTURE = 'Adventure',
    CLASSICS = 'Classics',
    CRIME = 'Crime',
    FANTASY = 'Fantasy'
}


@Schema({
    timestamps : true
})
export class Book {
    @Prop()
    title : string;

    @Prop()
    description : string;

    @Prop()
    author : string;

    @Prop()
    price : number;

    @Prop()
    category: Category;

    @Prop({ type : mongoose.Schema.Types.ObjectId , ref :'Users'})
    user : Users

}

export const BookSchema = SchemaFactory.createForClass(Book)