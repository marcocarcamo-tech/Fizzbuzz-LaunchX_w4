const ExplorerService = require('../../lib/services/ExplorerService')

describe("Unit test for ExplorerService", ()=>{
  test('1. Filter explorers by mission', ()=>{
    const explorers = [
      {
        name: "Woopa11",
        githubUsername: "ajolonauta11",
        score: 11,
        mission: "node",
        stacks: [
          "javascript",
          "elixir",
          "groovy",
          "reasonML",
          "elm"
        ]
      },
      {
        name: "Woopa12",
        githubUsername: "ajolonauta12",
        score: 12,
        mission: "node",
        stacks: [
          "javascript",
          "elixir",
          "groovy",
          "reasonML",
          "elm"
        ]
      },
      {
        name: "Woopa13",
        githubUsername: "ajolonauta13",
        score: 13,
        mission: "node",
        stacks: [
          "javascript",
          "elixir",
          "groovy",
          "reasonML",
          "elm"
        ]
      }
    ]
    
    const explorersInNode = ExplorerService.filterByMission(explorers, "node")
    
    expect(explorersInNode[0].mission).toBe("node")
    expect(explorersInNode[1].mission).toBe("node")
    expect(explorersInNode[2].mission).toBe("node")
  });
  test('2. Get amount of explorers by mission', ()=>{
    const explorers = [
      {
        name: "Woopa11",
        githubUsername: "ajolonauta11",
        score: 11,
        mission: "node",
        stacks: [
          "javascript",
          "elixir",
          "groovy",
          "reasonML",
          "elm"
        ]
      },
      {
        name: "Woopa12",
        githubUsername: "ajolonauta12",
        score: 12,
        mission: "node",
        stacks: [
          "javascript",
          "elixir",
          "groovy",
          "reasonML",
          "elm"
        ]
      },
      {
        name: "Woopa13",
        githubUsername: "ajolonauta13",
        score: 13,
        mission: "node",
        stacks: [
          "javascript",
          "elixir",
          "groovy",
          "reasonML",
          "elm"
        ]
      }
    ]
    
    const explorersAmountByMission = ExplorerService.getAmountOfExplorersByMission(explorers, "node")
    
    expect(explorersAmountByMission).toBe(3)
    
  });
  test('2. Get explorers usernames by mission', ()=>{
    const explorers = [
      {
        name: "Woopa11",
        githubUsername: "ajolonauta11",
        score: 11,
        mission: "node",
        stacks: [
          "javascript",
          "elixir",
          "groovy",
          "reasonML",
          "elm"
        ]
      },
      {
        name: "Woopa12",
        githubUsername: "ajolonauta12",
        score: 12,
        mission: "node",
        stacks: [
          "javascript",
          "elixir",
          "groovy",
          "reasonML",
          "elm"
        ]
      },
      {
        name: "Woopa13",
        githubUsername: "ajolonauta13",
        score: 13,
        mission: "node",
        stacks: [
          "javascript",
          "elixir",
          "groovy",
          "reasonML",
          "elm"
        ]
      }
    ]
    
    const explorersUsernames = ExplorerService.getExplorersUsernamesByMission(explorers, "node")
    
    expect(explorersUsernames).toBe(["Woopa11", "Woopa12", "Woopa13"])
    
  });
})