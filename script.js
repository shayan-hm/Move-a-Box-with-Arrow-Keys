const box = document.getElementById("box");
let boxPosition = { top: 0, left: 0 };

// Function to move the box
function moveBox(direction) {
  switch (direction) {
    case "up":
      boxPosition.top = Math.max(0, boxPosition.top - 10); // Prevent moving out of bounds
      break;
    case "down":
      boxPosition.top = Math.min(450, boxPosition.top + 10); // 500 - 50
      break;
    case "left":
      boxPosition.left = Math.max(0, boxPosition.left - 10); // Prevent moving out of bounds
      break;
    case "right":
      boxPosition.left = Math.min(450, boxPosition.left + 10); // 500 - 50
      break;
  }
  box.style.top = boxPosition.top + "px";
  box.style.left = boxPosition.left + "px";
}

// Event listener for key presses
window.addEventListener("keydown", (event) => {
  switch (event.key) {
    case "ArrowUp":
      moveBox("up");
      break;
    case "ArrowDown":
      moveBox("down");
      break;
    case "ArrowLeft":
      moveBox("left");
      break;
    case "ArrowRight":
      moveBox("right");
      break;
  }
});
