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

// FOR UPDATE MODAL
const interval = setInterval(() => {
  if (
    document.querySelector("[__open__modal__update]") &&
    document.querySelector("[__modal__update]")
  ) {
    clearInterval(interval);
    document
      .querySelector("[__open__modal__update]")
      .addEventListener("click", () => {
        const modal = document.querySelector("[__modal__update]");
        modal.classList.remove("hidden");
        modal.classList.add("flex");
      });
  }
}, 1);

document
  .querySelector("[__close__modal__update]")
  .addEventListener("click", () => {
    const modal = document.querySelector("[__modal__update]");
    modal.classList.remove("flex");
    modal.classList.add("hidden");
  });
