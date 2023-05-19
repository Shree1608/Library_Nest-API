import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BookModule } from './book/book.module';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AdminController } from './admin/admin.controller';
import { AdminModule } from './admin/admin.module';

@Module({
  imports: [BookModule, UsersModule , 
    ConfigModule.forRoot({ envFilePath :'.env' , isGlobal:true}),
    MongooseModule.forRoot(process.env.MONGO_URL),
    AdminModule],
  controllers: [AppController, AdminController],
  providers: [AppService],
})
export class AppModule {}
