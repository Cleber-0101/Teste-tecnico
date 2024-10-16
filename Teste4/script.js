function nextOddNumber(sequence) {
    const lastNumber = sequence[sequence.length - 1];
    return lastNumber + 2; 
}
const oddSequence = [1, 3, 5, 7];
console.log("Próximo número ímpar:", nextOddNumber(oddSequence)); 


function nextPowerOfTwo(sequence) {
    const lastNumber = sequence[sequence.length - 1];
    return lastNumber * 2; 
}
const powerOfTwoSequence = [2, 4, 8, 16, 32, 64];
console.log("Próximo número (potência de 2):", nextPowerOfTwo(powerOfTwoSequence)); 


function nextSquareNumber(sequence) {
    const lastIndex = Math.sqrt(sequence[sequence.length - 1]); 
    return (lastIndex + 1) ** 2; 
}
const squareSequence = [0, 1, 4, 9, 16, 25, 36];
console.log("Próximo número (quadrado):", nextSquareNumber(squareSequence)); 


function nextEvenSquareNumber(sequence) {
    const lastIndex = Math.sqrt(sequence[sequence.length - 1]); 
    return (lastIndex + 2) ** 2; 
}
const evenSquareSequence = [4, 16, 36, 64];
console.log("Próximo número (quadrado par):", nextEvenSquareNumber(evenSquareSequence)); 


function nextFibonacciNumber(sequence) {
    const lastNumber = sequence[sequence.length - 1];
    const secondLastNumber = sequence[sequence.length - 2];
    return lastNumber + secondLastNumber; 
}
const fibonacciSequence = [1, 1, 2, 3, 5, 8];
console.log("Próximo número da sequência de Fibonacci:", nextFibonacciNumber(fibonacciSequence)); 


function nextMixedSequence(sequence) {
    return sequence[sequence.length - 1] + 1; 
}
const mixedSequence = [2, 10, 12, 16, 17, 18, 19];
console.log("Próximo número da sequência misturada:", nextMixedSequence(mixedSequence)); 
