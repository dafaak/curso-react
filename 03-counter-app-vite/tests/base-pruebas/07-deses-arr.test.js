import {retornaArreglo} from "../../src/base-pruebas/07-deses-arr.js";

describe('Pruebas 07-deses-arr', () => {
        test('El arreglo debe contener un string y un numero', () => {
                const [letters, numbers] = retornaArreglo();
                // expect(letters).toBe('ABC');
                // expect(numbers).toBe(123);

                // expect(typeof letters).toBe('string');
                // expect(typeof numbers).toBe('number');

                expect(letters).toStrictEqual(expect.any(String));
                expect(numbers).toStrictEqual(expect.any(Number));

            }
        )
    }
)