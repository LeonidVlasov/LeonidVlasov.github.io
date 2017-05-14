(function () {

'use strict'

var arrDb = [];
for ( var i = 0; i < 5; i++) {
    arrDb[i] = prompt ('Вам необходимо ввести 5 имен. Введите имя №'+(i + 1));
    arrDb[i] = arrDb[i].toLowerCase();
}

var userName = prompt ('Введите имя пользователя');
    userName = userName.toLowerCase();

    for(  i = 0; i < 5; i++) {
        if ( arrDb[i] === userName ) {
            alert(userName.toUpperCase() +', с возвращением!');
            return(userName.toUpperCase());
  } else {
     alert( userName.toUpperCase() +'  не найден в базе пользователей');
     return;
}
}
})();

