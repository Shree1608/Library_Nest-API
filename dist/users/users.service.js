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
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const bcrypt = require("bcrypt");
let UsersService = class UsersService {
    constructor(userModel, jwtService) {
        this.userModel = userModel;
        this.jwtService = jwtService;
    }
    async signUp(createUserDto) {
        const { name, email, password } = createUserDto;
        const findemail = await this.userModel.findOne({ email });
        if (findemail) {
            throw new common_1.UnauthorizedException('email already exists');
        }
        const hashPassword = await bcrypt.hash(password, 10);
        const user = await this.userModel.create({
            name,
            email,
            password: hashPassword
        });
        return user;
    }
    async login(createUserDto) {
        const { email, password } = createUserDto;
        const user = await this.userModel.findOne({ email: email });
        if (!user) {
            throw new common_1.UnauthorizedException('invalid email ');
        }
        const isPass = await bcrypt.compare(password, user.password);
        if (!isPass) {
            throw new common_1.UnauthorizedException('invalid password ');
        }
        const token = this.jwtService.sign({ id: user._id });
        await this.userModel.findByIdAndUpdate(user._id, { token: token });
        return { token };
    }
    async logout(user) {
        console.log(user._id);
        return this.userModel.findByIdAndUpdate(user._id, { token: null }, { new: true });
    }
};
UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('Users')),
    __metadata("design:paramtypes", [mongoose_2.Model,
        jwt_1.JwtService])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map