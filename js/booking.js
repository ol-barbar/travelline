const roomCart = document.querySelectorAll(".price-room__room");
const buttonCart = document.querySelectorAll(".price-room__book-button");

for (let i = 0; i < buttonCart.length; i++) {
  buttonCart[i].addEventListener("click", function (evt) {
    var bookCart = buttonCart[i].closest(".price-room__room")
    // roomCart[i].addEventListener("mouseleave", function(evt) {
      bookCart.classList.add("price-room__room--book");
      // }
    // )
    }
  )
};

for (let i = 0; i < roomCart.length; i++) {
  roomCart[i].addEventListener("dblclick", function () {
    roomCart[i].classList.remove("price-room__room--book");
    }
  );
}

