// Реализация добавления статей в закладки
var bookmarkBtn = document.querySelectorAll('.bookmark'); // зафиксировать информацию обо всех кнопках "добавить в закладки/убрать из закладок"

function bookmarkClick(e) { // добавить статью в закладки/убрать статью из закладок
    e.preventDefault(); // отменить действия по умолчанию для элемента e
    var bm = this; // зафиксировать информацию о кнопке, на которую нажали
    bm.classList.toggle('added'); // добавить кнопке класс "добавлена" если его нет и убрать если есть
    var parentId = bm.parentElement.id; // зафиксировать id статьи, закладку которой мы решили добавить/убрать
    var bookMarks = document.querySelector('.bookmark-list'); // зафиксировать информацию о листе с закладками

    if(bm.classList.contains('added')) { // добавить статью в закладки ->
        bm.textContent = 'Удалить из закладок'; // поменять название кнопки с "Добавить в закладки" на "Удалить из закладок"
        var headerArticle = document.querySelector('#' + parentId +' h2'); // зафиксировать название статьи
        var linkArticle = document.createElement('a'); // создать ссылку на статью
        linkArticle.textContent = headerArticle.textContent; // присвоить ссылке название статьи
        linkArticle.setAttribute('href', '#' + parentId); // установить атрибут для ссылки
        bookMarks.append(linkArticle); // добавить ссылку на статью в конец списка закладок
    } else { // убрать статью из закладок ->
        bm.textContent = 'Добавить в закладки'; // поменять название кнопки с "Удалить из закладок" на "Добавить в закладки"
        var linkRemove = document.querySelector('a[href="#'+ parentId +'"]'); // зафиксировать информацию о ссылке, которую нужно удалить из списка закладок
        linkRemove.remove(); // убрать ссылку на статью
    }
}

for(let i=0; i<bookmarkBtn.length; i++){
    bookmarkBtn[i].onclick = bookmarkClick; // выполнить установленные действия при клике на кнопку "добавить в закладки/убрать из закладок"
}

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

// Модальне окно
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
