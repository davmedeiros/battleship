const Ship = (length) => {
  let timesHit = 0;
  let name;

  switch (length) {
    case 5:
      name = 'Carrier';
      break;
    case 4:
      name = 'Battleship';
      break;
    case 3:
      name = 'Cruiser';
      break;
    case 2:
      name = 'Destroyer';
      break;
    default:
      name = 'UFO';
      break;
  }

  const isSunk = () => timesHit >= length;

  const hit = () => {
    timesHit += 1;
    return timesHit;
  };

  return { length, isSunk, hit, name };
};

export default Ship;
