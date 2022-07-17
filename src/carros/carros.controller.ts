import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { CarroService } from './shared/carro.service';
import { Carro } from './shared/carro';

@Controller('carros')
export class CarrosController {

    construtor(
        private carroService: CarroService
    ) { }

    @Get()
    async getAll(): Promise<Carro[]> {
        return this.carroService.getAll();
    }

    @Get(':id')
    async getById(@Param('id') id: number): Promise<Carro> {
        return this.carroService.getById(id);
    }

    @Post()
    async create(@Body() carro: Carro): Promise<Carro> {
        return this.carroService.create(carro);
    }
    @Put('id')
    async update(@Param(id) id: number, @Body() carro:Carro): Promise<Carro> {
        carro.id = id;
        return this.CarroService.update(carro);
        
    }
    @Delete(':id')
    async delete(@Param('id') id: number) {
        this.carroService.delete(id);
    }



}
