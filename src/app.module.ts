import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CarrosModule } from './carros/carros.module';


import { MongooseModule } from '@nestjs/mongoose';



@Module({
  imports: [ 
    MongooseModule.forRoot('mongodb://localhost/nestera'),
    CarrosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
