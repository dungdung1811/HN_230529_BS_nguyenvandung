// cách 1 không dùng hàm sort
let arr = [3, 25, 38, 49, 12];

for (let i = 0; i < arr.length - 1; i++) {
  for (let j = 0; j < arr.length - i - 1; j++) {
    if (arr[j] < arr[j + 1]) {
      let temp = arr[j];
      arr[j] = arr[j + 1];
      arr[j + 1] = temp;
    }
  }
}

console.log(arr);


// cách 2 dùng sort;

arr.sort(function(a,b){a-b});
console.log(arr);