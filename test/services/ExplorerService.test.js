const ExplorerService = require("../../lib/services/ExplorerService");
const Reader = require("../../lib/util/Reader");


describe('UT of Explorer Service', () => {

    test('UT of filter by mission', () => {

        const exlorers = Reader.readJsonFile("explorers.json");
        const myExplorersNode = ExplorerService.filterByMission(exlorers, "node");

        expect(myExplorersNode).not.toBeNull();
        expect(myExplorersNode).toEqual(
            expect.arrayContaining([
                expect.objectContaining({
                    name: expect.any(String),
                    githubUsername: expect.any(String),
                    score: expect.any(Number),
                    mission: expect.any(String),
                    stacks: expect.any(Object),
                })
            ])
        );
        expect(myExplorersNode[0].mission).toBe('node');

    });

    test('UT of get explorers usernames by mission', () => {

        const explorers = Reader.readJsonFile("explorers.json");
        const myExplorersNodeUsername = ExplorerService.getExplorersUsernamesByMission(explorers, "node");

        expect(myExplorersNodeUsername).not.toBeNull();

    });

    test('UT of get amont of explorers by mission', () => {

        const explorers = Reader.readJsonFile("explorers.json");
        const myExplorersAmountByMission = ExplorerService.getAmountOfExplorersByMission(explorers, "node");

        expect(myExplorersAmountByMission).not.toBeNull();
        expect(myExplorersAmountByMission).toBeGreaterThan(0);

    });

});