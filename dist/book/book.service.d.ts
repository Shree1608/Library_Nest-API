import { Model } from 'mongoose';
import { Book } from './schema/book.schema';
import { CreateBookDto } from './dto/book.dto';
import { Query } from 'express-serve-static-core';
import { Users } from 'src/users/schema/user.schema';
export declare class BookService {
    private readonly bookModel;
    constructor(bookModel: Model<Book>);
    addBook(bookdto: CreateBookDto, user: Users): Promise<Book>;
    findAll(query: Query): Promise<Book[]>;
    findOne(id: string): Promise<Book>;
    update(id: string, bookdto: CreateBookDto): Promise<Book>;
    delete(id: string): Promise<Book>;
}
