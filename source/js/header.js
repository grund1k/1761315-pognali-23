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
const navLogoTablet = document.querySelector(".nav__logo--tablet");

window.addEventListener("scroll", function () {
  if (window.pageYOffset > 20) {
    navigation.classList.add("nav--sticky");
  } else {
    navigation.classList.remove("nav--sticky");
  };

  if (navLogo.src = "img/logo/logo-mobile.svg" && window.innerWidth < 768) {
    navLogo.src = "img/logo/logo-mobile-blue.svg";
  } else if (navLogoTablet.srcset = "img/logo/logo-full.svg" && window.innerWidth >= 768 ) {
    navLogoTablet.srcset = "img/logo/logo-full-blue.svg";
  }
});

window.addEventListener("scroll", function () {
  if (window.pageYOffset < 20) {
    navLogo.src = "img/logo/logo-mobile.svg";
    navLogoTablet.srcset = "img/logo/logo-full.svg";
  }
})

