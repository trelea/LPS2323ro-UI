export const setValues = (car) => {
  document.getElementById("_mark_update").value = car.mark;
  document.getElementById("_model_update").value = car.model;
  document.getElementById("_year_update").value = car.year;
  document.getElementById("_engine_capacity_update").value =
    car.engine_capacity;
};

const query = new URLSearchParams(window.location.search);
const id = query.get("carId");

const interval = setInterval(() => {
  if (document.querySelector("#form_update")) {
    clearInterval(interval);
    console.log(document.querySelector("#form_update"));
    document.querySelector("#form_update").addEventListener("submit", (e) => {
      e.preventDefault();
      const data = new FormData(e.target);
      console.log(id, data);
      // fetch(`http://localhost:3333/cars/${id}`, {
      //   method: "PUT",
      //   body: data,
      // })
      //   .then((res) => {
      //     console.log(res);
      //   })
      //   .catch((err) => alert(err));
    });
  }
}, 1);
