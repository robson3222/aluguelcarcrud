import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CarroSchema } from '../schemas/carro.schemas';
import { CarrosController } from './carros.controller';
import { CarroService } from './shared/carro.service';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: 'Carros', schema: CarroSchema}])
    ],
    controllers: [CarrosController],
    providers:[CarroService]
})
export class CarrosModule {}
