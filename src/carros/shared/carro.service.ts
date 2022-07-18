import { Injectable } from '@nestjs/common';
import { Carro } from './carro';

@Injectable()
export class CarroService {
    carros: Carro[] = [
        {id: 1, marca:'volks', alugado:true, nome:'gol', local:'campinas sp'},
        {id: 2, marca:'fiat', alugado:false, nome:'uno', local: 'campinas sp'},
        
    ];



getAll(){
    return this.carros;

}
getById(id: number){
    const carro = this.carros.find((value) => value.id == id);
    return carro;
 
}
create(carro: Carro) {
    let lastId = 0;
    if (this.carros.lenght > 0) {
        lastId = this.carros[this.carros.lenght -1].id;
    }

    Carro.id = lastId + 1;
    this.carros.push(carro);

    return Carro;

}

update(carro: Carro){
    const carroArray = this.getById(carro.id);
    if(carroArray) {
        carroArray.alugado = carro.alugado;
        carroArray.local = carro.local;
        carroArray.marca = carro.marca;
    }
    return carroArray;

}
delete(id: number){
    const index = this.carros.findIndex((value) => value.id == id);
    this.carros.splice(index, 1);

}
}