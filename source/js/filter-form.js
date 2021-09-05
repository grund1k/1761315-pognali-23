const filterForm = document.querySelectorAll(".filter-form");
const filterFormTitles = document.querySelectorAll(".filter-form__title");

for (let i = 0; i <= filterFormTitles.length; i++) {
  filterFormTitles[i].addEventListener("click", function() {
    if (filterForm[i].classList.contains("filter-form--collapsed")) {
      filterForm[i].classList.remove("filter-form--collapsed")
    } else {
      filterForm[i].classList.add("filter-form--collapsed")
    }
  })
}