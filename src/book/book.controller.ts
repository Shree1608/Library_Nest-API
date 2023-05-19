import { Body, Controller, Delete, Get, Param, Patch, Post, Query, Req, UseGuards } from '@nestjs/common';
import { BookService } from './book.service';
import { Book } from './schema/book.schema';
import { CreateBookDto } from './dto/book.dto';
import { Query as ExpressQuery} from 'express-serve-static-core'
import { AuthGuard } from '@nestjs/passport';
@Controller('book')
export class BookController {
    constructor( private bookService : BookService){}

    @UseGuards(AuthGuard())
    @Post('addbook')
    async addBook(@Body() bookdto : CreateBookDto , @Req() req): Promise<Book>{
        
        console.log(req.user);
        
        return this.bookService.addBook(bookdto , req.user )
    }
    @Get()
    async allBook(@Query() query: ExpressQuery): Promise<Book[]>{
        return this.bookService.findAll(query);
    }
    @Get(':id')
    async oneBook(@Param(':id') id): Promise<Book>{
        return this.bookService.findOne(id)
    }
    @Patch(':id')
    async updateBook(@Param(':id') id , bookdto:CreateBookDto):Promise<Book>{
        return this.bookService.update(id , bookdto)
    }
    @Delete(':id')
    async deleteBook(@Param(':id') id): Promise<Book>{
        return this.bookService.delete(id)
    }
}
