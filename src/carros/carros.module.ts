import { Module } from '@nestjs/common';
import { CarrosController } from './carros.controller';
import { CarroService } from './shared/carro.service';

@Module({
    controllers: [CarrosController],
    providers: [CarroService],
    

})
export class CarrosModule { }
