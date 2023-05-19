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
exports.BookController = void 0;
const common_1 = require("@nestjs/common");
const book_service_1 = require("./book.service");
const book_dto_1 = require("./dto/book.dto");
const passport_1 = require("@nestjs/passport");
let BookController = class BookController {
    constructor(bookService) {
        this.bookService = bookService;
    }
    async addBook(bookdto, req) {
        console.log(req.user);
        return this.bookService.addBook(bookdto, req.user);
    }
    async allBook(query) {
        return this.bookService.findAll(query);
    }
    async oneBook(id) {
        return this.bookService.findOne(id);
    }
    async updateBook(id, bookdto) {
        return this.bookService.update(id, bookdto);
    }
    async deleteBook(id) {
        return this.bookService.delete(id);
    }
};
__decorate([
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)()),
    (0, common_1.Post)('addbook'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [book_dto_1.CreateBookDto, Object]),
    __metadata("design:returntype", Promise)
], BookController.prototype, "addBook", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], BookController.prototype, "allBook", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)(':id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], BookController.prototype, "oneBook", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)(':id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, book_dto_1.CreateBookDto]),
    __metadata("design:returntype", Promise)
], BookController.prototype, "updateBook", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)(':id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], BookController.prototype, "deleteBook", null);
BookController = __decorate([
    (0, common_1.Controller)('book'),
    __metadata("design:paramtypes", [book_service_1.BookService])
], BookController);
exports.BookController = BookController;
//# sourceMappingURL=book.controller.js.map