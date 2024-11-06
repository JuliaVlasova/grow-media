$(document).ready(function () {
  $("#contactForm").on("submit", function (event) {
    event.preventDefault();

    // Проверка валидности формы
    if (this.checkValidity() === false) {
      event.stopPropagation();
    } else {
      // Если форма валидна, идёт отправка данных
      const formData = {
        name: $("#name").val(),
        email: $("#email").val(),
        phone: $("#phone").val(),
        turnover: $("#turnover").val(),
        industry: $("#industry").val(),
        agreement: $("#agreement").is(":checked"),
      };

      // Отправка данных на сервер
      $.ajax({
        url: "path/to/your/server/endpoint", // Путь к серверному обработчику
        type: "POST",
        data: formData,
        success: function (response) {
          $("#message").html(
            '<div class="alert alert-success">Спасибо! Ваша заявка принята</div>'
          );
        },
        error: function () {
          $("#message").html(
            '<div class="alert alert-danger">Ошибка! Попробуйте еще раз</div>'
          );
        },
      });
    }

    $(this).addClass("was-validated"); 
  });
});
