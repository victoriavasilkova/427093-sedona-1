var button = document.querySelector(".reviews__button");
var popup = document.querySelector(".modal");
var closeSuccess = popup.querySelector(".modal__button-success");


  button.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.toggle("modal-show");
  });


  closeSuccess.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
  });
