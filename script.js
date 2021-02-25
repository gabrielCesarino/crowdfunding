const backButton = document.querySelector(".backButton");
const modalBackground = document.querySelector(".modalBackground");
const closeModalButton = document.querySelector(".closeButton");
const bookmarkButton = document.querySelector(".bookmarkButton");

backButton.addEventListener("click", (e) => {
  modalBackground.classList.toggle("active");
});

closeModalButton.addEventListener("click", () => {
  modalBackground.classList.remove("active");
});

bookmarkButton.addEventListener("click", () => {
  bookmarkButton.classList.toggle("bookmarked");

  bookmarkButton.classList.contains("bookmarked")
    ? (bookmarkButton.querySelector("p").innerText = "Bookmarked")
    : (bookmarkButton.querySelector("p").innerText = "Bookmark");
});
