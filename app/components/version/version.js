'use strict';

angular.module('portfolio.version', [
  'portfolio.version.interpolate-filter',
  'portfolio.version.version-directive'
])

.value('version', '0.1');
