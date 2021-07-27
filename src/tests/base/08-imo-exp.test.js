import { getHeroeById } from "../../base/08-imp-exp";

describe('Pruebas en funciones de Héroes', () => {

    test('Debe de retornar un héroe por id', () => {

        const id = 1;
        const heroe = getHeroeById(id);

        console.log(heroe);
    })

})
