import { Body, Controller, Get, Post } from '@nestjs/common';
import { CarroService } from './shared/carro.service';
import { Carro } from './shared/carro';

@Controller('carros')
export class CarrosController {

    construtor(
        private carroService: CarroService
    ) { }

        @Get()
        async getAll() : Promise<Carro[]> {
            return this.carroService.getAll();
        }

        @Get(':id')
        async getById(@Param('id') id: number) : Promise<Carro> {
            return this.carroService.getById(id);
        }

       @Post()
       async create(@Body() carro: Carro): Promise<Carro> {
        return this.carroService.create(carro);
       }

        
    
}
