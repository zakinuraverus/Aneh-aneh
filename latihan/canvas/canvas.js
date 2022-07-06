const myCanvas = document.getElementById("myCanvas");

myCanvas.width = window.innerWidth;
myCanvas.height = window.innerHeight;

const c = myCanvas.getContext("2d");

// c.fillStyle = "pink";
// c.strokeStyle = "#333";
// c.lineWidth = 5;
// c.beginPath();
// // x, y, lebar, tinggi
// c.rect(0, 0, myCanvas.width, myCanvas.height);
// c.fill();
// c.stroke();

c.fillStyle = "lightblue";
c.strokeStyle = "#000";
c.lineWidth = 2;

// // x, y, radius, start angle , end angle
let x = 150;
let y = 200;
let speedX = 10;
let speedY = 5;
let radius = 150;

const draw = () => {
  window.requestAnimationFrame(draw);
  //   c.clearRect(0, 0, innerWidth, innerHeight);
  //   console.log("OK");
  c.beginPath();
  c.arc(x, y, radius, 0, 2 * Math.PI);
  c.fill();
  c.stroke();

  if (x + radius > myCanvas.width || x - radius < 0) {
    speedX = -speedX;
    console.log(speedX);
  }

  if (y + radius > myCanvas.height || y - radius < 0) {
    speedY = -speedY;
  }

  x += speedX;
  y += speedY;
};

draw();

//   c.beginPath();
//   c.moveTo(500, 50);
//   c.lineTo(450, 150);
//   c.lineTo(550, 150);
//   c.closePath();
//   c.fill();
//   c.stroke();
