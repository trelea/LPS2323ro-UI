import { insertIntoContainer } from "./getCars.js";

document.querySelector("#form").addEventListener("submit", (e) => {
  e.preventDefault();
  const data = new FormData(e.target);

  fetch("http://localhost:3333/cars", {
    method: "POST",
    body: data,
  })
    .then((res) => {
      if (res.status === 201 && res.statusText === "Created") {
        const modal = document.querySelector("[__modal]");
        modal.classList.remove("flex");
        modal.classList.add("hidden");
        res.json().then((car) => {
          insertIntoContainer(
            car.vehicle,
            document.querySelector("[cards_container]")
          );
          window.scrollTo(0, document.body.scrollHeight);
          document.querySelector("#form").reset();
        });
      }
    })
    .catch((err) => alert(err));
});
