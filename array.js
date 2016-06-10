'use strict';

function myUniq(arr){
  let hash = {};
  arr.forEach(function(num) {
        hash[parseInt(num)] = 1;
  });
  let keys = Object.keys(hash);
  let results = [];
  keys.forEach(function(num){
    results.push(parseInt(num));
  });
  return results;
}


function two_sum(array){
  let results = [];
  for(let i = 0; i < array.length; i++){
    for(let j=i+1; j<array.length; j++){
      if(array[i] + array[j] === 0){
        results.push([i, j]);
      }
    }
  }
  return results;
}

function my_transpose(matrix){
  let row = matrix[0].length;
  let col = matrix.length;

  let newMatrix = new Array(col)
    for(let i = 0; i<newMatrix.length;i++){
      newMatrix[i] = [];
    }

  for(let i=0; i<row; i++){
      for(let j=0; j<col; j++){
        newMatrix[j][i] = matrix[i][j];
      }
  }
return newMatrix;
}


function my_each(arr, callback){
  for(let i = 0; i < arr.length; i++){
    callback(arr[i]);
  }
  return arr;
}

function my_Map(arr, callback){
  let result = [];
  my_each(arr, (element) => result.push(callback(element)) );
  return result;
}

// console.log(myMap([1,2,3], function(num){ return num + 1; }));

Array.prototype.myEach = function (func) {
  for(let i = 0; i < this.length; i++){
      func(this[i]);
  }
  return this;
};

// [1,2,3,4].myEach(console.log);

Array.prototype.myMap = function (func) {
  let result = [];
  this.myEach(element => result.push(func(element)));
  return result;
};

// console.log([1,2,3,4].myMap((num) => {return num+1;}));


Array.prototype.myInject = function (func, acm) {
  let accum = 0;
  if (acm !== undefined){
    accum = acm;
  }else{
    accum = this.shift();
  }

  this.myEach((num) => accum = func(accum, num));
  return accum;
};

// console.log([1, 2, 3, 4, 5].myInject(function(accum, num){return accum + num;}, 6));


// function bubbleSort(array){
//   let sorted = false;
//   while(!sorted){
//     sorted = true;
//     for(let i = 0; i < array.length; i++){
//       for(let j = i+1; j < array.length; j++){
//         if(array[i] > array[j]){
//           let holder = array[j];
//           array[j] = array[i];
//           array[i] = holder;
//           sorted = false;
//         }
//       }
//     }
//   }
//   return array;
// }
Array.prototype.bubbleSort = function () {
  let isSorted = false;

  while (!isSorted) {
    isSorted = true;
    for (let i = 0; i < (this.length - 1); i++) {
      if (this[i] > this[i + 1]) {
        let tmp = this[i];
        this[i] = this[i + 1];
        this[i + 1] = tmp;

        isSorted = false;
      }
    }
  }

  return this;
};
// console.log(bubbleSort([3,3,5,23,25,1,2,5]));
// console.log([5, 3, 4, 2, 1,32 ,23,1 ,2].bubbleSort());

function substring(str){
  let result = [];
    for(let i = 0; i < str.length; i++){
      for(let j = i+1; j < str.length+1; j++){
        result.push(str.slice(i, j));
      }
    }
  return result;
}
//
// console.log(substring("cat"));

function range(start, end){
  if (end === start){
    return [];
  }
  let r = range(start, end-1);
  r.push(end-1);
  return r;
}

// console.log(range(1,10));


function sumArray(array) {
  if (array.length === 0){
      return 0;
  }

  let r = array[array.length-1];
  return sumArray(array.slice(0, array.length-1)) + r;

}

// console.log(sumArray([1,2,3]));

function exp(b, n) {
  if (n==0) {
    return 1;
  }
  return b * exp(b, n - 1);
}

// console.log(exp(2, 3));

function exp2(b, n){
  if (n===0) {
    return 1;
  }else if (n===1) {
    return b;
  }
    let r = 0;

  if(n % 2 === 0){
    r = exp2(b, n/2);
    return r*r;
  }else {
    r = exp2(b, (n-1)/2);
    return r * r * b;

  }
}
// console.log(exp2(2,3));

// function bsearch(array, target){
//   let mid = array/2;
//   if (array[mid]==target){
//     return mid;
//   }
//
//   let left = array.slice(0,mid);
//   let right = array.slice(mid+1, array.length);
//
//   if (array[mid] > target) {
//     bsearch(left, target);
//   }else {
//     //look at right side
//     bsearch(right, target);
//   }
//
// }


// function bsearch(array, target){
//   if(array.length === 0){
//     return -1;
//   }
//   let mid = Math.floor(array.length/2);
//   let left = array.slice(0,mid);
//   let right = array.slice(mid+1, array.length);
//
//   if (array[mid] === target){
//     return mid;
//   }else if(array[mid] > target) {
//     return bsearch(left, target);
//   }else {
//     //look at right side
//     const subproblem = bsearch(right, target);
//     return subproblem  === -1 ? -1 : subproblem + mid + 1;
//   }
//
// }

// console.log(bsearch([1,2,3,4,5], 5));
//
// function fibRec(n){
//   if (n=== 0){
//     return [];
//   }else if(n===1){
//     return [0];
//   }else{
//     return [0,1];
//   }
//
//   let fibs = fibsRec(n - 1);
//   fibs.push(fibs)
// }

function mergeSort(array){
  if (array.length < 2) {
    return array;
  }else{

  let mid = Math.floor(array.length/2);
  let left = array.slice(0, mid);
  let right = array.slice(mid);
  const lefta = mergeSort(left);
  const righta = mergeSort(right);
  return merge(lefta, righta);
  }
}
function merge(left, right){
  let result = [];

  while(left.length > 0 && right.length > 0){
    // switch (left[0] > right[0]) {
    //   case true:
    //       result.push(right.shift);
    //       break;
    //   case false:
    //       result.push(left.shift);
    //       break;
    // }
    let nextItem = (left[0] < right[0]) ? left.shift() : right.shift();
   result.push(nextItem);
  }

    return result.concat(left, right);
}

console.log(mergeSort([4,3,2,1,5,3,4,6]));
