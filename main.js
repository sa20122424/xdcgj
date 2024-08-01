

let number = [1, 2, 2, 3, 4, 4, 5];

let array1 = number;

let array2 = [];

for (let i = 0; i < number.length; i++) {
    if (array2.indexOf(number[i]) ===6 -1) {
        array2.push(number[i]);
    }
}

console.log("Массив с оригинальными числами:", array1);
console.log("Массив с уникальными числами:", array2);
