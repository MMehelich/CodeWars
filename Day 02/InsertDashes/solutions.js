function insertDash(num) {
  return `${num}`.split('').map((n, i, arr) =>
    n % 2 && arr[i+1] && arr[i+1] % 2 ? n + '-': n
  ).join('');
}
