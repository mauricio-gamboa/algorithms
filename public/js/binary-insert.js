(function () {
  'use strict';

  var a = [2, 4, 6, 10, 12, 14];

  var binaryInsert = function (value, array, startVal, endVal) {

    var length = array.length;
    var start = typeof(startVal) != 'undefined' ? startVal : 0;
    var end = typeof(endVal) != 'undefined' ? endVal : length - 1;
    var m = start + Math.floor((end - start) / 2);

    if (length == 0) {
      array.push(value);
      return array;
    }

    if (value > array[end]) {
      array.splice(end + 1, 0, value);
      return array;
    }

    if (value < array[start]) {
      array.splice(start, 0, value);
      return array;
    }

    if (start >= end) {
      return array;
    }

    if (value < array[m]) {
      binaryInsert(value, array, start, m - 1);
      return array;
    }

    if (value > array[m]) {
      binaryInsert(value, array, m + 1, end);
      return array;
    }
  };

  console.log(binaryInsert(5, a));

})();