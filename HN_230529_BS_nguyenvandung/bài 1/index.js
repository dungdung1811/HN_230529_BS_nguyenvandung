
let arr = [3, 5, 88, 99, 76, 8, 4, 5, 85, 63];
let max = arr[0];

for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
        max = arr[i];
    }
}

console.log(max);