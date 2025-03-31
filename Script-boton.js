/*function btn() {
  let red = Math.floor(Math.random() * 250);
  let blue = Math.floor(Math.random() * 256);
  let gray = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  let coral = Math.floor(Math.random() * 256);
  let color =
    "rgb(" + red + "," + blue + "," + gray + "," + green + "," + coral + ")";
  document.getElementById("colorFlipper").style.backgroundColor = color;
}
*/
function changeColor() {
  let red = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 250);
  let blue = Math.floor(Math.random() * 256);
  let coral = Math.floor(Math.random() * 250);
  let magenta = Math.floor(Math.random() * 156);

  let color =
    "rgb(" + red + "," + green + "," + blue + "," + coral + magenta + ")";
  document.getElementById("colorFlipper").style.backgroundColor = color;
}

alert("klk, pariguayo");
