const canvas = document.getElementById("drawingArea");
const ctx = canvas.getContext("2d");
let isDrawing = false;

canvas.addEventListener("mouseup", (e) => (isDrawing = false));

function trackMousePath() {
  let lastX = 0;
  let lastY = 0;

  return function (e) {
    if (!isDrawing) return;

    const currentX = e.clientX - canvas.offsetLeft;
    const currentY = e.clientY - canvas.offsetTop;

    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(currentX, currentY);
    ctx.strokeStyle = "blue";
    ctx.stroke();

    lastX = currentX;
    lastY = currentY;
  };
}

const drawPath = trackMousePath();
canvas.addEventListener("mousemove", drawPath);
canvas.addEventListener("mousedown", (e) => {
  isDrawing = true;
});
