window.onload = () => {
  let corazon = document.getElementById("corazoncito");
  let fondo = document.querySelector(".fondo");
  corazon.addEventListener("click", () => {
    changeColor();
  });
  function changeColor() {
    if (!fondo.style.fill) {
      fondo.style.fill = "#e1338b";
      fondo.style.animation = "disolver 1 1s";
      console.log(fondo.style.animationName + " transition added");
    } else {
      fondo.style.animationName = "none";
      fondo.style.fill = "";
      console.log(fondo.style.animationName);
    }
  }
};
