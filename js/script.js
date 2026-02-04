const cube = document.getElementById("cube");

let isDragging = false;
let startX, startY;
let rotationX = -20;
let rotationY = 20;

function startDrag(x, y) {
  isDragging = true;
  startX = x;
  startY = y;
}

function drag(x, y) {
  if (!isDragging) return;

  const deltaX = x - startX;
  const deltaY = y - startY;

  rotationY += deltaX * 0.5;
  rotationX -= deltaY * 0.5;

  cube.style.transform = `rotateX(${rotationX}deg) rotateY(${rotationY}deg)`;

  startX = x;
  startY = y;
}

function endDrag() {
  isDragging = false;
}

/* MOUSE (PC) */
document.addEventListener("mousedown", e => startDrag(e.clientX, e.clientY));
document.addEventListener("mousemove", e => drag(e.clientX, e.clientY));
document.addEventListener("mouseup", endDrag);

/* TOQUE (CELULAR) */
document.addEventListener("touchstart", e => {
  const touch = e.touches[0];
  startDrag(touch.clientX, touch.clientY);
});

document.addEventListener("touchmove", e => {
  const touch = e.touches[0];
  drag(touch.clientX, touch.clientY);
});

document.addEventListener("touchend", endDrag);
