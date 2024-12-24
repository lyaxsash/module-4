 alert ("Всем приветики");  //проверить подключился ли скрипт или нет. А вообще - это уведомление при загрузке страницы
 document.addEventListener("DOMContentLoaded" ) // DOMContentLoaded - когда все наши элементы загрузятся, только тогда будут выполняться какие-то шаги. Но если у нас на странице есть какие-то дополнительные ресурсы, такие как: картинки, видео, на это тоже нужно время, DOMContentLoaded ждать его не будет. Если нужно проверить ширину картинки, то в таком случае мы не сможем его получить. Потому что выполнение скрипта будет происходить намного быстрее, чем подгрузится дополнительный ресурс. Для того чтобы нам дождаться загрузки от контента стороннего, мы можем указать тип события «load».
 document.addEventListener("load" ) 