describe('Pruebas Demo', () => {
        test('Pruebita de ejemplo', () => {
                // 1. Inicializacion
                const message1 = 'Hola mundo!';
                // 2. Estimulo
                const message2 = message1.trim();
                // 3. Observar el comportamiento esperado
                expect(message1).toBe(message2);
            }
        )

    }
)
