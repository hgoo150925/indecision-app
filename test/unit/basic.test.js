import { describe, test } from 'vitest'

describe('Testing...', () => {
    test('Debe de ser mayor a 10', () => {
        // Arreglar
        let value = 5;

        // Estimulo 
        value += 12;
        // Observar el resultado
        if (value > 10) {
            return 'Ok';
        } else {
            throw `${value} no es mayor a 10`;
        }
    })
})