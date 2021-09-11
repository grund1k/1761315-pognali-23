const countryButtonChoosing = document.querySelector(".country-selector__button--choosing");
const countriesDropdown = document.querySelector(".countries-dropdown");
const countriesDropdownCloseButton = document.querySelector(".countries-dropdown__close-button");

countriesDropdown.classList.remove("countries-dropdown--open");

countryButtonChoosing.addEventListener("click", function() {
  countriesDropdown.classList.add("countries-dropdown--open");
});

countriesDropdownCloseButton.addEventListener("click", function(evt) {
  evt.preventDefault();
  countriesDropdown.classList.remove("countries-dropdown--open");
});
