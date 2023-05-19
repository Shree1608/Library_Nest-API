import { BookService } from './book.service';
import { Book } from './schema/book.schema';
import { CreateBookDto } from './dto/book.dto';
import { Query as ExpressQuery } from 'express-serve-static-core';
export declare class BookController {
    private bookService;
    constructor(bookService: BookService);
    addBook(bookdto: CreateBookDto, req: any): Promise<Book>;
    allBook(query: ExpressQuery): Promise<Book[]>;
    oneBook(id: any): Promise<Book>;
    updateBook(id: any, bookdto: CreateBookDto): Promise<Book>;
    deleteBook(id: any): Promise<Book>;
}
