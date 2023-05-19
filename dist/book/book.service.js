"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let BookService = class BookService {
    constructor(bookModel) {
        this.bookModel = bookModel;
    }
    async addBook(bookdto, user) {
        const data = Object.assign(bookdto, { user: user._id });
        const addbook = await this.bookModel.create(data);
        return addbook;
    }
    async findAll(query) {
        const resperPage = 2;
        const currentPage = Number(query.page) || 1;
        const skip = resperPage * (currentPage - 1);
        const keyword = query.keyword ? {
            title: {
                $regex: query.keyword,
                $options: 'i'
            }
        } : {};
        const allBook = await this.bookModel.find(Object.assign({}, keyword)).limit(resperPage).skip(skip);
        return allBook;
    }
    async findOne(id) {
        const oneBook = await this.bookModel.findById(id);
        if (!oneBook) {
            throw new common_1.NotFoundException('book not found');
        }
        return oneBook;
    }
    async update(id, bookdto) {
        const updatedBook = await this.bookModel.findByIdAndUpdate(id, bookdto, { new: true });
        return updatedBook;
    }
    async delete(id) {
        const deleteBook = await this.bookModel.findByIdAndRemove(id);
        return deleteBook;
    }
};
BookService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('Book')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], BookService);
exports.BookService = BookService;
//# sourceMappingURL=book.service.js.map