import {getSaludo} from "../../src/base-pruebas/02-template-string.js";

describe('Prueba template string', () => {
        test('getSaludo debe retornar "Hola Israel"', () => {
                const nombre = 'Israel';
                const resGetSaludo = getSaludo(nombre);
                expect(resGetSaludo).toBe(`Hola ${nombre}`);
            }
        )
    }
)