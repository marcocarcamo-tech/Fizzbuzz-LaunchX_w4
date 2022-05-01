const FizzbuzzService = require('../../lib/services/FizzbuzzService')

describe("Unit test for FizzbuzzService", ()=>{
  test('1. Validate Fizz', ()=>{
    const explorer = {
        name: "Woopa11",
        githubUsername: "ajolonauta1",
        score: 3,
        mission: "node",
        stacks: [
          "javascript",
          "elixir",
          "groovy",
          "reasonML",
          "elm"
        ],
        trick: ""
      }
    
    const fizzExplorer = FizzbuzzService.applyValidationInExplorer(explorer)
    
    expect(fizzExplorer.trick).toBe("FIZZ")
  });
  test('2. Validate Buzz', ()=>{
    const explorer = {
        name: "Woopa11",
        githubUsername: "ajolonauta1",
        score: 5,
        mission: "node",
        stacks: [
          "javascript",
          "elixir",
          "groovy",
          "reasonML",
          "elm"
        ],
        trick: ""
      }
    
    const fizzExplorer = FizzbuzzService.applyValidationInExplorer(explorer)
    
    expect(fizzExplorer.trick).toBe("BUZZ")
  });
})