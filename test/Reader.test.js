const Reader = require("../app/lib/util/Reader");

describe('Prueba de la utilidad READER de archivos JSON', () => {

    test('prueba de readJsonFile', () => {

        const myExplorers = Reader.readJsonFile("explorers.json")

        expect(result).toBe(`[
            'ajolonauta1',
            'ajolonauta2',
            'ajolonauta3',
            'ajolonauta4',
            'ajolonauta5',
            'ajolonauta11',
            'ajolonauta12',
            'ajolonauta13',
            'ajolonauta14',
            'ajolonauta15'
          ]`)

    });

});