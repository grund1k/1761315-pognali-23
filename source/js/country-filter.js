const countryFilter = document.querySelector(".country-filter")
const countryFilterButton = document.querySelector(".country-filter__button");
const countryFilterWrapper = document.querySelector(".country-filter__search-wrapper");
const countryFilterBottomButton = document.querySelector(".country-filter__bottom-close-button");

countryFilterButton.addEventListener("click", function() {
  if (countryFilterWrapper.classList.contains("country-filter__search-wrapper--opened")) {
    countryFilterWrapper.classList.remove("country-filter__search-wrapper--opened");
    countryFilterButton.classList.add("country-filter__button--open");
    countryFilterButton.classList.remove("country-filter__button--close");
    document.getElementById("country-filter__button-text").innerHTML="Показать все";
    countryFilter.classList.remove("country-filter--open")
  } else {
    countryFilterWrapper.classList.add("country-filter__search-wrapper--opened");
    countryFilterButton.classList.add("country-filter__button--close");
    countryFilterButton.classList.remove("country-filter__button--open");
    document.getElementById("country-filter__button-text").innerHTML="Свернуть";
    countryFilter.classList.add("country-filter--open")
  }
});

countryFilterBottomButton.addEventListener("click", function() {
  countryFilterWrapper.classList.remove("country-filter__search-wrapper--opened");
  countryFilterButton.classList.add("country-filter__button--open");
  countryFilterButton.classList.remove("country-filter__button--close");
  document.getElementById("country-filter__button-text").innerHTML="Показать все";
  countryFilter.classList.remove("country-filter--open")
});
