const ExplorerService = require('../../lib/services/ExplorerService')

describe("Unit test for ExplorerService", ()=>{
  test('1. Filter explorers by mission', ()=>{
    const explorers = [{
        "name": "Woopa11",
        "githubUsername": "ajolonauta11",
        "score": 11,
        "mission": "node",
        "stacks": [
          "javascript",
          "elixir",
          "groovy",
          "reasonML",
          "elm"
        ]
      },
      {
        "name": "Woopa12",
        "githubUsername": "ajolonauta12",
        "score": 12,
        "mission": "java",
        "stacks": [
          "javascript",
          "elixir",
          "groovy",
          "reasonML",
          "elm"
        ]
      },
      {
        "name": "Woopa13",
        "githubUsername": "ajolonauta13",
        "score": 13,
        "mission": "node",
        "stacks": [
          "javascript",
          "elixir",
          "groovy",
          "reasonML",
          "elm"
        ]
      }]
    
    const explorersInNode = ExplorerService.filterByMission(explorers, "node")
    expect(explorersInNode.forEach(explorer => { explorer.mission})).toBe("node")
  });
})