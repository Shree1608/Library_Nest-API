import { Category } from "../schema/book.schema";
import { Users } from "../../users/schema/user.schema";
export declare class CreateBookDto {
    readonly title: string;
    readonly description: string;
    readonly author: string;
    readonly price: number;
    readonly category: Category;
    readonly user: Users;
}
