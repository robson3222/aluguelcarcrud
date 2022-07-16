import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CarrosController } from './carros/carros.controller';
import { CarroService } from './carros/shared/carro.service';

@Module({
  imports: [],
  controllers: [AppController, CarrosController],
  providers: [AppService, CarroService],
})
export class AppModule {}
