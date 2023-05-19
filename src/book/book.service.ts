import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import  { Model } from 'mongoose';
import { Book } from './schema/book.schema';
import { CreateBookDto } from './dto/book.dto';
import {Query} from 'express-serve-static-core'
import { Users } from 'src/users/schema/user.schema';

@Injectable()
export class BookService {
    constructor(
        @InjectModel('Book')
        private readonly bookModel : Model<Book>,
        
    ){}

   async addBook(bookdto : CreateBookDto ,user:Users): Promise<Book>{
    const data = Object.assign(bookdto ,{user : user._id})
    const addbook = await this.bookModel.create(data)
    return addbook
}
   async findAll(query:Query):Promise <Book[]>{
    const resperPage = 2
    const currentPage = Number(query.page) || 1
    const skip = resperPage * (currentPage - 1)
    const keyword = query.keyword ? {
        title :{
            $regex : query.keyword ,
            $options :'i'
        }
    } :{}
    const allBook = await this.bookModel.find( {...keyword}).limit(resperPage).skip(skip)
    return allBook
   }

   async findOne(id : string) : Promise<Book>{
    const oneBook = await this.bookModel.findById(id)
    if(!oneBook){
        throw new NotFoundException('book not found')
    }
    return oneBook
   }

   async update(id : string , bookdto : CreateBookDto): Promise<Book>{
    const updatedBook = await this.bookModel.findByIdAndUpdate(id ,bookdto , {new : true})
    return updatedBook
   }

   async delete(id : string) : Promise<Book>{
    const deleteBook = await this.bookModel.findByIdAndRemove(id)
    return deleteBook
   }
     
}
