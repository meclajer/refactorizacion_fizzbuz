class ExplorerService {

    static filterByMission(explorers, mission) {

        const explorersByMission = explorers.filter((explorer) => mission == "node");
        return explorersByMission

    }

    static getAmountOfExplorersByMission(explorers, mission) {

        const explorersNode = this.getExplorersUsernamesByMission(explorers, mission);
        const explorersAmount = explorersNode.length
        return explorersAmount;

    }

    static getExplorersUsernamesByMission(explorers, mission) {

        const explorersNode = this.filterByMission(explorers, mission);
        const usernamesInNode = explorersNode.map((explorer) => explorer.githubUsername);
        return usernamesInNode;

    }

}

module.exports = ExplorerService