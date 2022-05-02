const Reader = require('../utils/Reader');
const ExplorerService = require('../services/ExplorerService');

class ExplorerController{
    static getExplorersByMission(mission){

        const explorers = Reader.readJsonFile('explorers.json');

        return ExplorerService.filterByMission(explorers, mission);

    }
}

module.exports = ExplorerController