(function () {

'use strict';

var arrDb = [];
for ( var i = 0; i < 5; i++) {
    arrDb[i] = prompt ('Вам необходимо ввести 5 имен. Введите имя №'+(i + 1));
    arrDb[i] = arrDb[i].toLowerCase();
}

var userName = prompt ('Введите имя пользователя');
    userName = userName.toLowerCase();

        if ( arrDb.indexOf (userName) !== -1) {
            alert(userName.toUpperCase() +', с возвращением!');
      } else  {
         alert( userName.toUpperCase() +'  не найден в базе пользователей');
}
})();

