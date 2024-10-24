import { setValues } from "./updateCar.js";

const insertCarDetails = (car) => {
  const section = document.querySelector("[__car_details]");
  section.innerHTML = `
      <div class="flex-1">
        <img src="${
          car.thumb === ""
            ? "../../assets/notfound.png"
            : `http://localhost:3333/${car.thumb}`
        }" alt="" class="rounded-xl shadow-2xl border-2 border-slate-900/50  w-full">
      </div>

      <div class="flex-1">
          <div class="flex gap-4 justify-end">
              <button type="button"
                  __open__modal__update
                  class="bg-sky-700 p-2 px-6 text-white text-xl font-medium rounded-xl shadow-2xl hover:bg-sky-500">Update</button>
              <button type="button"
                  id="delete"
                  class="bg-red-700 p-2 px-6 text-white text-xl font-medium rounded-xl shadow-2xl hover:bg-red-500">Delete</button>
          </div>
          <ul class="flex flex-col gap-4">
              <li class="font-extrabold text-6xl pb-10">${car.mark} ${
    car.model
  }</li>
              <li class="font-semibold text-2xl text-gray-600">Year: <strong
                  class="font-bold text-3xl text-black">${
                    car.year
                  }</strong></li>
              <li class="font-semibold text-2xl text-gray-600">Enagine Capacity: <strong
                  class="font-bold text-3xl text-black">${
                    car.engine_capacity
                  }</strong></li>
          </ul>
      </div>`;
};

document.addEventListener("DOMContentLoaded", () => {
  const query = new URLSearchParams(window.location.search);
  const id = query.get("carId");

  fetch(`http://localhost:3333/cars/${id}`)
    .then((res) => res.json())
    .then((data) => {
      insertCarDetails(data.vehicle);
      setValues(data.vehicle);
    });
});
