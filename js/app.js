const list = document.getElementById("select");
const img = document.getElementById("img-select");
const container = document.getElementById("container");
const item = document.getElementById("items");

list.addEventListener("change", (e) => {
  let valor = e.target.value;
  switch (valor) {
    case "huesos":
      img.setAttribute("src", "/img/HTML.png");
      break;
    case "venas":
      img.setAttribute("src", "/img/JAVASCRIPT.png");
      break;
    default:
      break;
  }
});

container.addEventListener("mousemove", (event) => {
  let positionX = event.offsetX;
  let positionY = event.offsetY;
  item.style.clipPath = `circle(60px at ${positionX}px ${positionY}px)`;
});
