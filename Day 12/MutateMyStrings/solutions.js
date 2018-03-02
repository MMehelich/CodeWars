const mutateMyStrings = (stringOne, stringTwo) =>
  [...new Set([...stringOne, ''].map((n, i) =>
    stringTwo.slice(0, i) + stringOne.slice(i)))]
    .join('\n') + '\n';
