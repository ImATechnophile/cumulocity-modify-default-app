(function () {
  'use strict';

angular.module('c8y.ui').run(runBlock);

function runBlock(c8yAppIconsList) {
  c8yAppIconsList['Internet_of_parking'] = 'parking'
}
}());



