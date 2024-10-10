document.addEventListener("DOMContentLoaded", () => {
  const query = new URLSearchParams(window.location.search);
  const id = query.get("carId");

  const interval = setInterval(() => {
    if (document.getElementById("delete") !== null) {
      clearInterval(interval);
      document.getElementById("delete").addEventListener("click", () => {
        fetch(`http://localhost:3333/cars/${id}`, { method: "DELETE" })
          .then((res) => res.json())
          .then((_) => (window.location.pathname = "/src/pages/home/"))
          .catch((err) => console.log(err));
      });
    }
  }, 10);
});
