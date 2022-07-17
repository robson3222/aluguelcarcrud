import { Controller, Get } from '@nestjs/common';
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

        create(corro: Carro) {
            let lastId = 0;
            if (this.carros.lenght > 0) {
                lastId = this.carros[this.carros.lenght -1].id;
            }

            Carro.id = lastId + 1;
            this.carros.push(carro);

            return Carro;


   

        }
    
}
