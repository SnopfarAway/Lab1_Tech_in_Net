// Реализация добавления статей в закладки
$( document ).ready(function() { // выполнить, когда документ прогрузился
    $('.bookmark').click(function (e) { // при нажатии на элемент с классом .bookmark выполнить
        e.preventDefault(); // отменить действия по умолчанию для элемента e
        $(this).toggleClass('added'); // поменять класс элемента, на который нажали, на added, если был "bookmark" и наоборот
        var parentId = $(this).parent().attr("id"); // зафиксировать информацию об атрибуте родительского элемента элемента, на который мы нажали
        var bookMarks = $('.bookmark-list'); // зафиксировать информацию о списке закладок
        if($(this).hasClass('added')) { // если элемент, на который нажали имеет класс "added"
            $(this).text("Удалить из закладок"); // поменять текст этого элемента
            var text = $('#' + parentId +' h2').text(); // зафиксировать информацию о названии статьи
            $('<a>', { href: '#' + parentId, text: text}).appendTo(bookMarks); // создать элемент <a> с ссылкой на статью и названием в списке закладок
        } else { // если элемент, на который нажали имеет класс ".bookmark"
            $(this).text("Добавить в закладки"); // поменять текст этого элемента
            $('a[href="#'+ parentId +'"]').remove(); // убрать ссылку на статью
        }
    });
});

// Реализация сворачивания и разворачивания статьи
var toggle = document.getElementsByClassName("toggle"); // зафиксировать информацию обо всех кнопках "Подробнее/Скрыть"

for (let i=0; i<toggle.length; i++) { 
    toggle[i].onclick = function(e) { // выполнить при нажатии на кнопку "Подробнее/Скрыть"
        e.preventDefault(); // отменить действия по умолчанию для элемента e
        var article_text = document.getElementsByClassName("article_text"); // зафиксировать информацию о всех текстах статей

        if(toggle[i].textContent == "Скрыть") { // нажатие было зафиксировано на кнопке "Скрыть"
            toggle[i].textContent = "Подробнее"; // поменять значение кнопки
            article_text[i].style.display = "none"; // скрыть текст статьи
        } else { // нажатие было зафиксировано на кнопке "Подробнее"
            toggle[i].textContent = "Скрыть"; // поменять значение кнопки
            article_text[i].style.display = "inline"; // показать текст статьи
        }
    }
}

// Модальное окно
var modal = document.getElementById("myModal"); // зафиксировать информацию о модальном окне
var btn = document.getElementById("letter"); // зафиксировать информацию о кнопке вызова модального окна
var closeBtn = document.getElementById("close"); // зафиксировать информацию о кнопке закрытия модального окна

btn.onclick = function() { // выполнить при нажатии на кнопку вызова модального окна
    modal.style.display = "block"; // отобразить модальное окно
}

closeBtn.onclick = function() { // выполнить при нажатии на кнопку закрытия модального окна
    modal.style.display = "none"; // закрыть модальное окно
}

window.onclick = function(event) { // выполнить при нажатии на окно просмотра
    if(event.target == modal) { // нажатие было зафиксировано на модальном окне
        modal.style.display = "none"; // закрыть модальное окно
    }
} 

// Кнопка Меню
var menuBtn = document.getElementById("menuBtn"); // зафиксировать информацию о кнопке "Меню"
var menu = document.getElementById("menu"); // зафиксировать информацию о меню

function menuBtnClick(e) {
    if(menu.style.display == "none") { // меню не отображается
        menu.style.display = "block"; // отобразить меню
    } else { // меню отображатеся
        menu.style.display = "none"; //скрыть меню
    }
}
menuBtn.onclick = menuBtnClick; // выполнить при нажатии на кнопку "Меню"

// Реализация фиксации при прокрутке кнопки меню
$(document).ready(function() {
    menu_top = $('header').offset().top;
    $(window).scroll(function () {             // отслеживаем событие прокрутки страницы
        if ($(window).scrollTop() > menu_top) {  // если прокрутка дошла до меню
          if ($('header').css('position') != 'fixed') {  // проверяем, если меню еще не зафиксировано
            $('header').css('position','fixed');  // задаем блоку меню свойство position = fixed
          }
        } else {                                 // прокрутка страницы обратно вверх достигла место "перехода" меню
          if ($('header').css('position') == 'fixed') {  // если меню зафиксировано
            $('header').css('position','');
          }
        }
    });
});

// Реализация работы кнопки согласия на обработу персональных данных
$(document).ready(function(){
    $('.check input').click(function (e) {
        var send = $('.send input').attr('disabled');
        if(typeof send !== typeof undefined && send !== false) {
            $('.send input').removeAttr('disabled');
        } else {
            $('.send input').attr('disabled','disabled');
        }
    });
});