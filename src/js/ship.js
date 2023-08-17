const Ship = (length) => {
  let timesHit = 0;

  const isSunk = () => timesHit >= length;

  const hit = () => {
    timesHit += 1;
    return timesHit;
  };

  return { length, timesHit, isSunk, hit };
};

export default Ship;
