const countryButtonChoosing = document.querySelector(".country-selector__button--choosing");
const countriesDropdown = document.querySelector(".countries-dropdown");
const countriesDropdownCloseButton = document.querySelector(".countries-dropdown__close-button");

countryButtonChoosing.addEventListener("click", function() {
  countriesDropdown.style.display = "block";
});

countriesDropdownCloseButton.addEventListener("click", function(evt) {
  evt.preventDefault();
  countriesDropdown.style.display = "none";
});
