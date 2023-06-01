$(document).ready(function() {
      $(window).scroll(function() {
        if ($(this).scrollTop() > 100) { // Если прокрутка больше 100 пикселей
          $('#menu').fadeIn(); // Показываем меню
        } else {
          $('#menu').fadeOut(); // Скрываем меню
        }
      });
    });
