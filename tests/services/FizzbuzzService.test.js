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
  test('3. Validate Fizzbuzz', ()=>{
    const explorer = {
        name: "Woopa11",
        githubUsername: "ajolonauta1",
        score: 15,
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
    
    expect(fizzExplorer.trick).toBe("FIZZBUZZ")
  });
  test('4. Validate any other possibility', ()=>{
    const explorer = {
        name: "Woopa11",
        githubUsername: "ajolonauta1",
        score: 1,
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
    
    expect(fizzExplorer.trick).toBe(1)
  });
})