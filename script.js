var slideIndex = 1;


showSlides(slideIndex);

//next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

//image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");

  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}



  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }




  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }





  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}





// Выбираем активную таблицу
var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

function doPost(e) {
  // Получаем данные из формы
  var name = e.parameter.name;
  var email = e.parameter.email;
  var message = e.parameter.message;

  // Проверяем наличие данных и валидность email
  if (name && email && message && email.includes('@')) {
    // Добавляем данные в таблицу
    sheet.appendRow([name, email, message]);
    return ContentService.createTextOutput("Данные успешно добавлены в таблицу.");
  } else {
    return ContentService.createTextOutput("Пожалуйста, заполните все поля корректно.");
  }
}

