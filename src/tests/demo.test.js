
describe('Pruebas en el archivo demo.ts.js', () => {

    test('debe de ser iguales los string', () => {
        // 1. Inicialización
        const mensaje = 'Hola mundo';

        // 2. Estímulo
        const mensaje2 = `Hola mundo`;

        // 3. Observar el comportamiento
        expect(mensaje).toBe(mensaje2); // ===
    })
})



