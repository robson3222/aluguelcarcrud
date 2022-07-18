import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CarrosModule } from './carros/carros.module';


import { MongooseModule } from '@nestjs/mongoose';
import { CarrosController } from './carros/carros.controller';
import { CarroService } from './carros/shared/carro.service';

@Module({
  imports: [ 
    MongooseModule.forRoot(''),
    CarrosController
  ],
  controllers: [AppController],
  providers: [AppService, CarroService],
})
export class AppModule {}
