test('When hit, returns ship remaining health', () => {
  const ship = Ship();
  expect(ship.hit()).toBe(2);
});
