(function () {
  'use strict';

  var items = [2, 4, 6, 8, 10];

  var binarySearch = function (a, n, x) {
    var start = 0;
    var end = n - 1;

    while (start <= end) {
      var m = start + Math.floor((end - start) / 2);

      if (x === a[m]) {
        return m;
      } else if (x < a[m]) {
        end = m - 1;
      } else {
        start = m + 1;
      }
    }

    return -1;
  };

  console.log(binarySearch(items, items.length, 8));
})();