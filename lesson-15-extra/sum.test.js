const sum = require('./sum');

describe('1', () => {
  it(`Test`, () => {
  	const { task: func } = sum;

  	expect(sum(5, 6)).toBe(true);
  
  })
});

const num = require('./num');

describe('2', () => {
  it(`Test`, () => {
  	const { task: func } = num;

  	expect(num).toEqual(5);
  
  })
});

const each = require('./each');
const arr1 = require('./each');
const myFunc = require('./each');

describe(`3`, () => {
  it(`Test`, () => {
  	expect(typeof(each)).toBe('object');
  	expect(each).toEqual([8, 7, 6, 5, 4]);
  	expect(each).toHaveLength(5);
  })
});
