import { Injectable } from '@nestjs/common';
import { Carro } from './carro';

@Injectable()
export class CarroService {
    carros: Carro[] = [
        {id: 1, marca:'volks', alugado:true, nome:'gol', local:'campinas sp'},
        {id: 2, marca:'fiat', alugado:false, nome:'uno', local: 'campinas sp'}
        
    ];



getAll(){
    return this.carros;

}
getById(id: number){
    const carro = this.carros.find((value) => value.id == id);
    return carro;
 
}
create(carro: Carro){

}

update(carro: Carro){

}
delete(id: number){

}
}