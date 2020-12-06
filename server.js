var http = require("http"); // подключить встроенный модуль http для создания сервера

http.createServer(function (request, response) { // создать сервер
    console.log(request.headers); // вывести информацию о запросе и ответе в консоль
    response.writeHead(200,{"Content-Type": "text/plain;charset=utf-8"}); //добавить в ответ статусный код, заголовок сообщения c кодировкой utf-8
    response.write("Запрос получен.\n"); // добавить в ответ информацию о получении запроса
    response.end("Соединение завершено."); // сигнал серверу о том, что ответ готов
}).listen(8888); // прослушивать входящие подключения через локальный порт 8888

console.log("Старт"); // вывести информацию о запуске сервера в консоль