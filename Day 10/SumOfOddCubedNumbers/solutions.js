function cubeOdd(arr) {
return arr.some(isNaN) ? undefined : arr.reduce((a,b) => a+(b%2!==0 ? Math.pow(b,3):0),0);
}
