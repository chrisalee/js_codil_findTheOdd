const findTheOdd = (arr) => {

  // convert the array to a map with element as key and number of occurances as value
  const mapKey = arr.reduce((value, index) => {
    // if value in arr already there, add one to occurances, or its the first time  //counts number of occurances of each
    value[index] = ++value[index] || 1;
    // console.log(value[index])
    return value;
  }, {});
  // console.log(mapKey, 'number in array: occurances');

  //then filter map key by checking occurance values to see odd one out
  for(occurances in mapKey) {
    if(mapKey[occurances] % 2 !== 0) {
//       console.log(parseInt(occurances));
      return parseInt(occurances);
    }
  }
}

findTheOdd([9, 3, 9, 3, 9, 7, 9]);
