const ExplorerController = require("../../lib/controllers/ExplorerController");
describe("Unit test for ExplorerController", ()=>{
    test("1. Get explorer by mission", ()=>{
        const explorersByMission = ExplorerController.getExplorersByMission("node");
    
        expect(explorersByMission[0]).toStrictEqual({
            "name": "Woopa1",
            "githubUsername": "ajolonauta1",
            "score": 1,
            "mission": "node",
            "stacks": [
              "javascript",
              "reasonML",
              "elm"
            ]
          });
    });
   
});