const ExplorerService = require("../../lib/services/ExplorerService");
const Reader = require("../../lib/util/Reader");


describe('UT of Explorer Service', () => {

    // test('UT of filter by mission', () => {

    //     // objt
    //     const exlorers = Reader.readJsonFile("explorers.json");
    //     const myExplorersNode = ExplorerService.filterByMission(exlorers, "node");

    //     expect(myExplorersNode).not.toBeNull();

    //     expect(myExplorersNode).toMatch(/node/);

    // });

    test('UT of get amont of explorers by mission', () => {

        // objt
        const explorers = Reader.readJsonFile("explorers.json");
        const myExplorersbyMission = ExplorerService.getExplorersUsernamesByMission(explorers, "node");

        expect(myExplorersbyMission).not.toBeNull();

        expect(myExplorersbyMission).toMatch(/node/);

    });

    // test('UT of get explorers usernames by mission', () => {

    //     // objt
    //     const explorers = Reader.readJsonFile("explorers.json");
    //     const myExplorersNodeUsername = ExplorerService.getExplorersUsernamesByMission(explorers, "node");

    // });

});