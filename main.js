//task1

function test(j, arr) {
  for (let i = 0; i < arr.length; i++) {
    if (j == arr[i]) {
      return true
    }
  }
  return false;
}

function getCount(item) {
  const arr_first = [2, 3, 4];
  const arr_second = [5, 6, 7, 8, 9];
  const arr_third = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19];
  const str_arr = item.toString().substr(item.toString().length - 2, 2).split('');
  const condition = str_arr.length === 2 && (str_arr[0] > 1 || str_arr[0] == 0);
  if ((str_arr.length === 1 && str_arr[0] == 1) || (condition && str_arr[1] == 1)) {
    console.log(`${item} компьютер`);
  } else if (item == 0 || str_arr[1] == 0 || (str_arr.length === 1 && test(str_arr[0], arr_second)) || (condition && test(str_arr[1], arr_second)) || (str_arr.length === 2 && str_arr[0] == 1 && test(str_arr.join(''), arr_third))) {
    console.log(`${item} компьютеров`);
  } else if ((str_arr.length === 1 && test(str_arr[0], arr_first)) || (condition && test(str_arr[1], arr_first))) {
    console.log(`${item} компьютера`)
  }

}

getCount(111116);


//task2

function primeNumber(count) {

  const arr = [];

  function isPrime(m) {

    for (let i = 2; i < m; i++) {

      if (m % i === 0) {
        return false;
      }
    }
    return true;
  }


  for (let i = 2; i < count; i++) {

    if (count % i === 0 && isPrime(i)) {
      arr.push(i);
    }
  }
  return arr;
};

function primeArray(arr) {

  const arrayPrime = []

  for (let i = 0; i < arr.length; i++) {
    arrayPrime.push(primeNumber(arr[i]));
  }

  let array = arrayPrime[0].filter(el => arrayPrime[1].indexOf);

  for (let i = 2; i < arrayPrime.length; i++) {
    array = array.filter(el => arrayPrime[i].indexOf(el) > -1);
  }

  let item = 0;

  let a = [];

  let j = 0;

  let i = 0;

  while (j < array.length) {
    while (i < array.length) {
      if (j != i) {
        item = array[j] * array[i];
        a.push(item);
      }
      i++;
    }
    j++;
    i = 0;
  }

  a.push(array.reduce((acc, rec) => acc * rec))

  return Array.from(new Set(array.concat(a)));
}

console.log(primeArray([42, 14, 28]));


//task3 

function PrimeArray(min, max) {

  const arr = [];

  function isPrime(m) {

    for (let i = 2; i < m; i++) {

      if (m % i === 0) {
        return false;
      }
    }
    return true;
  }

  for (let i = min; i <= max; i++) {
    if (isPrime(i)) {
      arr.push(i);
    }
  }

  return arr;
};

console.log(PrimeArray(11, 37));

//task4 

function getTable(count) {
  let str = "\t";

  let arrayItem = [];

  for (let i = 1; i <= count; i++) {
    str += '\t' + i;
    arrayItem.push(i);
  }

  str = str + '\n' + '\t' + arrayItem[0];

  let j = 0;

  let i = 0;

  while (j < arrayItem.length) {
    while (i < arrayItem.length) {
      item = arrayItem[j] * arrayItem[i];
      str += '\t'+ item;
      i++;
    }
    j++;
    if (j < arrayItem.length) {
      str = str + '\n' + '\t' + arrayItem[j];
    }
    i = 0;
  }
  return str;

}

console.log(getTable(15));