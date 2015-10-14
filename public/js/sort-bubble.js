(function () {
  'use strict';

  var items = [2, 9, 6, 0, 5, 1, 4];

  var sort = function (a) {
    var swapped;

    do {
      swapped = false;
      for (var i = 0; i < a.length - 1; i++) {
        if (a[i] > a[i + 1]) {
          swapped = swap(a, i);
        }
      }
    } while (swapped);

    return a;
  };

  var swap = function (a, i) {
    var temp = a[i];
    a[i] = a[i + 1];
    a[i + 1] = temp;
    return true;
  };

  console.log(sort(items));
})();