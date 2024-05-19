const tools = document.querySelectorAll(".tool");
const canvas = document.getElementById("drawingArea");

const ctx = canvas.getContext("2d");

function drawShape(shape) {
  return function closure(event) {
    ctx.beginPath();

    const x = event.clientX - canvas.offsetLeft;
    const y = event.clientY - canvas.offsetTop;

    if (shape === "rectangle") {
      ctx.rect(x, y, 50, 50);
    } else if (shape === "circle") {
      ctx.arc(x, y, 50, 0, 2 * Math.PI);
    }
    ctx.stroke();
  };
}

tools.forEach((tool) => {
  const shape = tool.dataset.tool;
  tool.addEventListener("click", function () {
    canvas.addEventListener("click", drawShape(shape), { once: true });
  });
});
