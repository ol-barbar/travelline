const roomCart = document.querySelectorAll(".price-room__room");

for (let i = 0; i < roomCart.length; i++) {
  var buttonCart = roomCart[i].querySelector(".price-room__book-button")
  if (buttonCart !== null) {
    buttonCart.addEventListener("click", function() {
    roomCart[i].addEventListener("mouseleave", function addMouseLeave() {
      roomCart[i].classList.add("price-room__room--book");
      roomCart[i].removeEventListener("mouseleave", addMouseLeave);
    }
    )
    }
    )
  }
}

for (let i = 0; i < roomCart.length; i++) {
  roomCart[i].addEventListener("click", function (evt) {
    roomCart[i].classList.remove("price-room__room--book");
  }
  );
}
