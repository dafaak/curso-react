import {usContext} from "../../src/base-pruebas/06-deses-obj.js";

describe('Pruebas deses obj', () => {
        test('debe devolver un objeto con clave=fucken y anios=30', () => {
            const datos = {
                nombreClave: 'fucken',
                anios: 30
            }
            const usuario = usContext(datos)
            expect(usuario).toEqual(expect.objectContaining(datos));

        })
    }
)