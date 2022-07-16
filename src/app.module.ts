import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CarrosController } from './carros/carros.controller';

@Module({
  imports: [],
  controllers: [AppController, CarrosController],
  providers: [AppService],
})
export class AppModule {}
