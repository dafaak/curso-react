import {getHeroeById, getHeroesByOwner} from "../../src/base-pruebas/08-imp-exp.js";
import heroes from "../../src/data/heroes.js";

describe('Pruebas 08-imp-epx', () => {
        test('getHeroeById devuelve el heroe con id=1', () => {
                const id = 1;
                const hero = getHeroeById(id);
                expect(hero).toEqual(expect.objectContaining({id}))
            }
        )

        test('getHeroeById devuelve undefined con id que no existe', () => {
                const id = 10;
                const hero = getHeroeById(id);
                expect(hero).toBeUndefined();
            }
        )

        test('getHeroesByOwner debe devolver los heroes de DC', () => {
                const owner = 'DC';
                // const heroes = [
                //     {
                //         id: 1,
                //         name: 'Batman',
                //         owner: 'DC'
                //     },
                //     {
                //         id: 4,
                //         name: 'Flash',
                //         owner: 'DC'
                //     },
                //     {
                //         id: 3,
                //         name: 'Superman',
                //         owner: 'DC'
                //     },
                // ];
                const heroesRes = getHeroesByOwner(owner);
                expect(heroesRes.length).toBe(3);
                // expect(heroesRes).toEqual(expect.arrayContaining(heroes));
                expect(heroesRes).toEqual(expect.arrayContaining(heroes.filter(hero => hero.owner === owner)));
            }
        )

        test('getHeroesByOwner debe devolver los heroes de Marvel', () => {
                const owner = 'Marvel';
                const heroesRes = getHeroesByOwner(owner);
                expect(heroesRes.length).toBe(2);
                expect(heroesRes).toEqual(expect.arrayContaining(heroes.filter(hero => hero.owner === owner)));
            }
        )

    }
)