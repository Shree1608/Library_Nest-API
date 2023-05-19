import mongoose from "mongoose";
import { Users } from "../../users/schema/user.schema";
export declare enum Category {
    ADVENTURE = "Adventure",
    CLASSICS = "Classics",
    CRIME = "Crime",
    FANTASY = "Fantasy"
}
export declare class Book {
    title: string;
    description: string;
    author: string;
    price: number;
    category: Category;
    user: Users;
}
export declare const BookSchema: mongoose.Schema<Book, mongoose.Model<Book, any, any, any, mongoose.Document<unknown, any, Book> & Omit<Book & {
    _id: mongoose.Types.ObjectId;
}, never>, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Book, mongoose.Document<unknown, {}, mongoose.FlatRecord<Book>> & Omit<mongoose.FlatRecord<Book> & {
    _id: mongoose.Types.ObjectId;
}, never>>;
