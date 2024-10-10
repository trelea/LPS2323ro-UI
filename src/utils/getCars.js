export const insertIntoContainer = (car, container) => {
  const div = document.createElement("div");
  div.setAttribute(
    "class",
    "flex flex-col rounded-xl bg-slate-200 shadow-2xl shadow-gray-400 p-4 gap-4 border border-gray-950/10"
  );
  div.innerHTML = `
    <img src="${
      car.thumb === ""
        ? "../../assets/notfound.png"
        : `http://localhost:3333/${car.thumb}`
    }" alt="" class="rounded-xl h-56 object-cover object-center">
		<div class="flex flex-col gap-1">
			<h1 class="text-2xl font-bold text-gray-800">${car.mark} ${car.model} ${
    car.year
  }</h1>
			<p class="text-lg font-normal text-gray-600">${car.engine_capacity}cc</p>
		</div>
		<a href="/src/pages/car/?carId=${
      car.id
    }" class="text-blue-600 text-sm font-light hover:underline w-fit">View Details...</a>`;
  container.appendChild(div);
};

document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector("[cards_container]");

  fetch("http://localhost:3333/cars")
    .then((res) => res.json())
    .then((data) => {
      data.vehicles.map((car) => {
        insertIntoContainer(car, container);
      });
    });
});
