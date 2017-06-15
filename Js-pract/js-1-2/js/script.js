(function () {
    'use strict';

function pow(num, exp) {

  var val = num;

  if (exp > 0) {
    for (var i = 1; i < exp; i++ ) {
      val *= num;
    }
    alert(val);
    } 

    else if ( exp < 0 ) {
    exp = (-1) * exp;
    for ( i = 1; i < exp; i++ ) {
      val *= num;
    }
    alert(1 / val);
    } 

    else {
    alert(1);
    }
}

var num = prompt('введите любое число');
var exp = prompt('введите степень в которую хотите его возвести');

pow(num, exp);

})();

