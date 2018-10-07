var CryptoJS = require("crypto-js")
    http = require('http'),
    querystring = require('querystring'),
    request = require('request');
var express = require("express");
var bodyParser = require("body-parser");
var fs = require("fs");
const exmo = require("exmo-api");

;(function() {

  // calc - основная функция для библиотеки
  function calc(value) {
    // ...
  }

  // вспомогательная переменная
  var version = '1.1.1';   //
  // ... другие вспомогательные переменные и функции

  function CurrentPair(){
       const apiKey = 'K-c9edfb10cd6eaccaa434c3e0ae8c17f258b9c7fe';
       const apiSecret = 'S-732aa903fd2946816f9ef622faacb6dd5fefd7c0';
       exmo.init_exmo({key:apiKey, secret:apiSecret});
       this.currency1='TRX'; // покупаемая валюта
       this.currency2='RUB'; // продаваемая валюта
       this.currentPair='TRX_RUB'; // название торговой пары
       this.currency1MinQuantity = 0.001; // минимальный объем покупаемой валюты
       this.orderLifeTime = 3; // (мин) через этот период ордер на на покупку currency1 будет отменен
           this.balancesCurrency1=undefined;
           this.balancesCurrency2=undefined;
           this.reservedCurrency1=undefined;
           this.reservedCurrency2=undefined;
  
       this.user_info=function(){

          exmo.api_query("user_info", { }, result => (
              fs.writeFile('t1.txt', result, (err) => { if (err) {console.error(err); return} }) //файл записан успешно
            ));
           var content = JSON.parse(fs.readFileSync("t1.txt", "utf8"));
           console.log(content);
           
/*           this.balancesCurrency1=content['balances'][this.currency1];
           this.balancesCurrency2=content['balances'][this.currency2];
           this.reservedCurrency1=content['reserved'][this.currency1];
           this.reservedCurrency2=content['reserved'][this.currency2];
      */
       }
       this.user_open_orders=function(){
            exmo.api_query("user_open_orders", { }, result => {

                let res = JSON.parse(result); console.log(res);
                var currentPair=this.currentPair;

                if(res[currentPair] == undefined) console.log('Открытых оредеров нет');

                let buyOrders = [];

                for(let i in res[currentPair]){
                    console.log(res[currentPair][i]);
                    if(res[currentPair][i].type == 'sell'){
                       console.log('Выход, ждем пока не исполнятся/закроются все ордера на продажу');
                    }else{
                      buyOrders.push(res[currentPair][i]);
                    }
                } 
                //console.log('buyOrders');
                //console.log(buyOrders);            
           })
     
        }
        this.user=function(){
           //
        }
}

function analyzing(propertyOne, propertyTwo){
    //
}

function post1(){
    var request = require('request');
    var fs = require("fs"); 
    request('https://api.exmo.com/v1/ticker/').pipe(fs.createWriteStream('ticker.txt'))
    var content = fs.readFileSync("base.txt", "utf8");
    var users = JSON.parse(content);
    var users2=selectCurrence(users, "RUB");

    return users2
}
calc.post1=post1;

  function selectCurrence(list, nameCurrence){
      nameCurrence="_"+nameCurrence;
       var keys = Object.keys(list);
        var regexp = new RegExp(nameCurrence, "");
        var listCurrence={};
        var keysSelect=[];
       keys.forEach(item => (~item.search(regexp) ? keysSelect.push([item, list[item]['vol_curr']]): true));        
      keysSelect.sort((a,b)=>(+a[1] > +b[1]? 1: -1));         


        return keysSelect
  }
calc.selectCurrence=selectCurrence;
calc.CurrentPair=CurrentPair;



  // присвоим в lodash size и другие функции, которые нужно вынести из модуля
  //calc.stringExpession = stringExpession;
  
  // calc.defaults = ...
  // calc.cloneDeep = ...

  // "экспортировать" calc наружу из модуля
  //window.calc = calc; // в оригинальном коде здесь сложнее, но смысл тот же
  module.exports.calc=calc;
}());
