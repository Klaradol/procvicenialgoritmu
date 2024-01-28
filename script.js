function factorialRecursive(n) {
    if (n === 0 || n === 1) {
      return 1;
    } else {
      return n * factorialRecursive(n - 1);
    }
  }
  
  const result = factorialRecursive(5);
  console.log(result); 

  function najdiMinMax(seznam) {
    if (seznam.length === 0) {
      return "Seznam je prázdný.";
    }
    let nejmensi = seznam[0];
    let nejvetsi = seznam[0];
  
    for (let i = 1; i < seznam.length; i++) {
      if (seznam[i] < nejmensi) {
        nejmensi = seznam[i];
      } else if (seznam[i] > nejvetsi) {
        nejvetsi = seznam[i];
      }
    }
    return { nejmensi, nejvetsi };
  }
  
  const vstup = [3, 1, 4, 1, 5, 9, 2];
  const vysledek = najdiMinMax(vstup);
  
  console.log(`Nejmenší číslo: ${vysledek.nejmensi}`);
  console.log(`Největší číslo: ${vysledek.nejvetsi}`);
  
  function bubbleSort(arr) {
    var n = arr.length;
    for (var i = 0; i < n-1; i++) {
        for (var j = 0; j < n-i-1; j++) {
            if (arr[j] > arr[j+1]) {
                var temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    return arr;
}
var inputArray = [3, 1, 4, 1, 5, 9, 2];
var sortedArray = bubbleSort(inputArray);
console.log(sortedArray); 
