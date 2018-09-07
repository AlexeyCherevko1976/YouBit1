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
        var keys = Object.keys(list);
        var regexp = new RegExp("_"+nameCurrence, "");
        var listCurrence={};
        for (var i=0; i<keys.length; i++){
          console.log(~keys[i].search(regexp));
            if (~keys[i].search(regexp)){continue};
            //listCurrence[keys[i]]=list[keys[i]];
            console.log(keys.length);
            console.log(keys[i]);
        }
        return keys
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
