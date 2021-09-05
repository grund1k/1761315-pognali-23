const addProfileModalOn = document.querySelector(".add-profile__modal");
const addProfileModal = document.querySelector(".add-profile__modal-popup");
const addProfileModalOff = document.querySelector(".add-profile__modal-close");

addProfileModalOn.addEventListener("click", function(evt) {
  evt.preventDefault();
  addProfileModal.style.display = "block";
});

addProfileModalOff.addEventListener("click", function() {
  addProfileModal.style.display = "none";
});