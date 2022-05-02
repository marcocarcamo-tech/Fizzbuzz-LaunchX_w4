const Reader = require('../utils/Reader');
const ExplorerService = require('../services/ExplorerService');

class ExplorerController{
    static getExplorersByMission(mission){

        const explorers = Reader.readJsonFile('explorers.json');

        return ExplorerService.filterByMission(explorers, mission);

    }

    static getExplorersUsernameByMission(mission){

        const explorers = Reader.readJsonFile('explorers.json');

        return ExplorerService.getExplorersUsernamesByMission(explorers, mission);
    }

    static getExplorersAmountByMission(mission){

        const explorers = Reader.readJsonFile('explorers.json');

        return ExplorerService.getAmountOfExplorersByMission(explorers, mission);
    }
}
module.exports = ExplorerController