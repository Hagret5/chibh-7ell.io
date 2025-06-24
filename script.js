document.addEventListener("DOMContentLoaded", () => {
  const garden = document.getElementById("garden");

  garden.addEventListener("click", (e) => {
    const rect = garden.getBoundingClientRect();
    const x = e.clientX - rect.left - 20;
    const y = e.clientY - rect.top - 20;

    const flower = document.createElement("div");
    flower.classList.add("flower");
    flower.style.left = `${x}px`;
    flower.style.top = `${y}px`;

    garden.appendChild(flower);
  });
});