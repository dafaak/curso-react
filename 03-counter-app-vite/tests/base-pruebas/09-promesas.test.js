import {getHeroeByIdAsync} from "../../src/base-pruebas/09-promesas.js";

describe('Pruebas 08-promesas', () => {
        test('getHeroesByIdAsync debe devolver el heroe de id=1', (done) => {
                const id = 1;
                getHeroeByIdAsync(id)
                    .then(
                        hero => {
                            expect(hero).toEqual({
                                id: 1,
                                name: 'Batman',
                                owner: 'DC'
                            })
                            done();
                        }
                    )
            }
        )

        test('getHeroesByIdAsync debe devolver error si el heroe no existe', (done) => {
                const id = 10;
                getHeroeByIdAsync(id)
                    .then(
                        hero => {
                            expect(hero).toBeFalsy();
                            done();
                        }
                    )
                    .catch(
                        error => {
                            expect(error).toBe('No se pudo encontrar el héroe')
                            done();
                        }
                    )
            }
        )
    }
)
