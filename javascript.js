function getRandomArbitrary(min, max) {
    return Math.round(Math.random() * (max - min) + min);
  }
let array = [];
for (i = 0; i<10; i++) {
    array.push(getRandomArbitrary(1,100))
}
for (i = 0; i <array.length; i++) {
    console.log(array[i]);
}