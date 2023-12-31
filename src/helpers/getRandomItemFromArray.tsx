const getRandomItemFromArray = <T,>(arr: T[]): T => {
  return arr[Math.floor(Math.random() * arr.length)];
};

export default getRandomItemFromArray;
