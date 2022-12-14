import {getUser, getUsuarioActivo} from "../../src/base-pruebas/05-funciones.js";

describe('Pruebas funciones', () => {
        test(' getUser debe retornar un objeto', () => {
                const testUser = {
                    uid: 'ABC123',
                    username: 'El_Papi1502'
                };
                const user = getUser();

                expect(user).toEqual(testUser);

            }
        );

        test('getUserActivo debe retornar un objeto con la propiedad nombre=Israel', () => {
                const nombre = 'Israel';
                const usuarioActivo = getUsuarioActivo(nombre);
                expect(usuarioActivo).toEqual(expect.objectContaining({username: nombre}));

            }
        )
    }
)