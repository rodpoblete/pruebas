import '@testing-library/jest-dom';
import { getSaludo } from "../../base/02-template-string";

describe('Pruebas en 02-template-string', () => {

    test('getSaludo debe de retornar Hola Dionisio!', () => {

        // 1. Inicialización
        const nombre = 'Dionisio';

        // 2. Estímulo
        const saludo = getSaludo(nombre);

        // Observar el comportamiento
        expect(saludo).toBe('Hola ' + nombre + '!');
    })

    // getSaludo debe de retornar Hola Anacleto! si no hay argumento en el nombre

    test('getSaludo debe retornar Hola Anacleto! si no hay argumentos en el nombre', () => {

        // 2. Estímulo
        const saludo = getSaludo();

        // 3. Observar el comportamiento
        expect(saludo).toBe('Hola Anacleto!');
    })

})

