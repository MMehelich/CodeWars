let capitalize = (str) =>
  [0, 1].map(alternate =>
  [...str]
    .map((char, i) => i % 2 === alternate ? char.toUpperCase() : char)
    .join(''));
