import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { config } from 'process';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersSchema } from './schema/user.schema';
import { JwtStrategy } from 'src/auth/strategy/jwt.strategy';

@Module({
  imports :[
    PassportModule.register({defaultStrategy :'jwt'}),
    JwtModule.registerAsync({
      inject :[ConfigService],
      useFactory : (config : ConfigService)=>{
        return {
          secret : config.get<string>('JWT_SECRET'),
          signOptions : {
            expiresIn :config.get<string | number>('JWT_EXPIRES'),
          }
        }
      }
    }),
    MongooseModule.forFeature([{name :'Users' , schema : UsersSchema}])
  ],
  controllers: [UsersController],
  providers: [UsersService , JwtStrategy],
  exports : [JwtStrategy,PassportModule]
})
export class UsersModule {}
