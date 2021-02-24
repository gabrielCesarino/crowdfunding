const backButton = document.querySelector(".backButton");
const modalBackground = document.querySelector(".modalBackground");
const closeModalButton = document.querySelector(".closeButton");

backButton.addEventListener("click", (e) => {
  modalBackground.classList.toggle("active");
});

closeModalButton.addEventListener("click", () => {
  modalBackground.classList.remove("active");
});
