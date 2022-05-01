const Reader = require('../../lib/utils/Reader')

describe("Unit test for Reader", ()=>{
  test('1. Check not null data', ()=>{
    const data = Reader.readJsonFile('../../explorers.json')
    expect(data).not.toBe(null)
  });

})