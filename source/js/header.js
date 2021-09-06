const navigation = document.querySelector(".nav");
const navigationOn = document.querySelector(".nav__toggle");
const navigationOff = document.querySelector(".modal-menu__toggle");

navigation.classList.remove("nav--no-js");
navigation.classList.remove("nav--menu-opened");

navigationOn.addEventListener("click", function() {
  if (navigation.classList.contains("nav--menu-closed")) {
    navigation.classList.remove("nav--menu-closed");
    navigation.classList.add("nav--menu-opened");
  } else {
    navigation.classList.add("nav--menu-opened");
  }
});

navigationOff.addEventListener("click", function() {
  if (navigation.classList.contains("nav--menu-opened")) {
    navigation.classList.remove("nav--menu-opened");
    navigation.classList.add("nav--menu-closed");
  } else {
    navigation.classList.add("nav--menu-closed");
  }
});

const navLogo = document.querySelector(".nav__logo");

window.addEventListener("scroll", function () {
  if (window.pageYOffset > 10) {
    navigation.classList.add("nav--sticky");
    navLogo.src = "img/logo_footer.svg";
  } else {
    navigation.classList.remove("nav--sticky");
    navLogo.src = "img/logo_text.svg";
  }
});
