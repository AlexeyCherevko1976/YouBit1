import requests
import json
import time

# 180215006 - исходник
# программа будет работать бесконечно
n=0
while (n<2):
    # получить данные с биржи
    r = requests.get('https://api.exmo.com/v1/ticker/')
    # переводим данные во понятный программе формат
    obj = json.loads(r.text)
    # находим все валюты, перечисленные в файле
    for pair in obj:

        print(
            "Валюта",
            pair,
            "текущая максимальная цена покупки",
            obj[pair]['buy_price'],
            "текущая минимальная цена продажи",
            obj[pair]['sell_price']
        )
   
    # подождать три секунды и начать заново
    time.sleep(3)
    n+=1
