;(function() {

  // calc - основная функция для библиотеки
  function calc(value) {
    // ...
  }

  // вспомогательная переменная
  var version = '1.1.1';   //
  // ... другие вспомогательные переменные и функции

  function Inquiry(){
       this.ticker='unde';
       this.lagestTicker=undefined;
       this.selectCurrence=function(nameSelectCurrence){
           var keys = Object.keys(user);

           alert( keys ); // name, age
       }

  }

  function selectCurrence(list, nameCurrence){
       //var nameCurrence="_RUB";
       nameCurrence="_"+nameCurrence;
       var keys = Object.keys(list);
        var regexp = new RegExp(nameCurrence, "");
        var listCurrence={};
        keys.forEach(item => (~item.search(regexp) ? listCurrence[item]=list[item]: true)); 
 console.log(keys);
function compareNumeric(a, b) {
  if (a['vol_curr'] > b['vol_curr']) return 1;
  if (a['vol_curr'] < b['vol_curr']) return -1;
}
keys.sort(compareNumeric);


        return listCurrence
  }
 
 calc.selectCurrence=selectCurrence;

  calc.Inquiry=Inquiry;



  // присвоим в lodash size и другие функции, которые нужно вынести из модуля
  //calc.stringExpession = stringExpession;
  
  // calc.defaults = ...
  // calc.cloneDeep = ...

  // "экспортировать" calc наружу из модуля
  window.calc = calc; // в оригинальном коде здесь сложнее, но смысл тот же
  //module.exports.calc=calc;
}());
