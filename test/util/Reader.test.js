const Reader = require("../../lib/util/Reader");



describe('Prueba de la utilidad READER de archivos JSON', () => {

    test('prueba de readJsonFile', () => {

        const myReader = Reader.readJsonFile("explorers.json")

        console.info(myReader) //my reader is the JSON 

        expect(myReader).not.toBeNull()

    });

});