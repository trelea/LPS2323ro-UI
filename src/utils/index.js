document.querySelector("[__open__modal]").addEventListener("click", () => {
  const modal = document.querySelector("[__modal]");
  modal.classList.remove("hidden");
  modal.classList.add("flex");
});

document.querySelector("[__close__modal]").addEventListener("click", () => {
  const modal = document.querySelector("[__modal]");
  modal.classList.remove("flex");
  modal.classList.add("hidden");
});
