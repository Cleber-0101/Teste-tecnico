function isFibonacci(num) {
    let a = 0;
    let b = 1;

    while (b < num) {
        const temp = b;
        b = a + b;
        a = temp;
    }

    return b === num;
}

const inputNumber = 25; 
if (isFibonacci(inputNumber)) {
    console.log(`${inputNumber} pertence à sequência de Fibonacci.`);
} else {
    console.log(`${inputNumber} não pertence à sequência de Fibonacci.`);
}