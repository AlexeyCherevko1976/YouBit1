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
        //keys.forEach(item => (~item.search(regexp) ? listCurrence[item]=list[item]: true)); 
        var keysSelect=[];
       keys.forEach(item => (~item.search(regexp) ? keysSelect.push([item, list[item]['vol_curr']]): true));        
        console.log(keysSelect);          
        keysSelect.sort(compareNumeric);
        console.log(keysSelect); 
        keysSelect.forEach(item =>listCurrence[item]=list[item]); 

        //console.log(keysSelect);
function compareNumeric(a, b) {
  if (+a[1] > +b[1]) return 1;
  if (+a[1] < +b[1]) return -1;
}

        return listCurrence
  }


function post1(namePost){
    var request = require('request');
    request(namePost, function (error, response, body) {
    //console.log('error:', error); // Print the error if one occurred
    //console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    console.log('body:', body); // Print the HTML for the Google homepage.
});
}
calc.post1=post1;
 
calc.selectCurrence=selectCurrence;


  calc.Inquiry=Inquiry;



  // присвоим в lodash size и другие функции, которые нужно вынести из модуля
  //calc.stringExpession = stringExpession;
  
  // calc.defaults = ...
  // calc.cloneDeep = ...

  // "экспортировать" calc наружу из модуля
  //window.calc = calc; // в оригинальном коде здесь сложнее, но смысл тот же
  module.exports.calc=calc;
}());
