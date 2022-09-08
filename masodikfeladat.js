function getRandomArbitrary(min, max) {
    return Math.round(Math.random() * (max - min) + min);
  }
  let array= [];
for ( i = 0; i < 20 ; i++ ) {
    let macska = {nev: "Cirmos "+ i, eletkor: getRandomArbitrary(2,10)};
    array.push(macska);
    if(array[i].eletkor==2) {
        console.log(array[i].nev + " " + array[i].eletkor)
    }
}