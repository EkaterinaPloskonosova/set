import Team, { charact1, charact2, charact3 } from '../app.js';

test('team.add ', () => {
  const result = new Team();
  result.add(charact1);
  const resultArray = result.toArray();
  expect(resultArray).toEqual([{ name: 'Character1' }]);
});

test('team.add ', () => {
  function resultExpectError() {
    const result = new Team();
    result.add(charact1);
    result.add(charact1);
    return result.toArray();
  }
  expect(resultExpectError).toThrow(new Error('Такой объект уже существует в команде'));
});

test('team.addAll ', () => {
  const result = new Team();
  result.addAll(charact1, charact2, charact3);
  const resultArray = result.toArray();
  expect(resultArray).toEqual([{ name: 'Character1' }, { name: 'Character2' }, { name: 'Character3' }]);
});
