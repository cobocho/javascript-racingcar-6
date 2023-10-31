describe('Car 테스트', () => {
  it('초기값으로 `distance`에 `0`을 가진다.', () => {
    // given & when
    const car = new Car();

    // then
    expect(car.getDistance()).toBe(0);
  });

  it.each([
    { power: 0, delta: 0 },
    { power: 1, delta: 0 },
    { power: 2, delta: 0 },
    { power: 3, delta: 0 },
    { power: 4, delta: 1 },
    { power: 5, delta: 1 },
    { power: 6, delta: 1 },
    { power: 7, delta: 1 },
  ])(
    `move(power)를 호출 시 인자가 ${Car.DEAD_ZONE} 이상이면 distance가 ${Car.SPEED} 증가합니다.`,
    ({ power, delta }) => {
      // given
      const car = new Car();

      // when
      car.move(power);

      // then
      expect(car.getDistance()).toBe(delta);
    },
  );
});
