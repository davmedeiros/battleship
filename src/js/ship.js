const Ship = (length) => {
  let timesHit = 0;

  let isSunk = () => {};

  const hit = () => {
    timesHit += 1;
    return timesHit;
  };

  return { length, timesHit, isSunk, hit };
};

export default Ship;
