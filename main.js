window.onload = () => {
  let corazon = document.getElementById("corazoncito");
  let fondo = document.querySelector(".fondo");
  let estrellita = document.querySelector("#estrellita");

  const formulario = document.querySelector(".formularioContainer");
  estrellita.addEventListener("click", () => {
    console.log(formulario.style.visibility);

    if (
      !formulario.style.visibility ||
      formulario.style.visibility == "visible"
    ) {
      formulario.style.visibility = "hidden";
    } else {
      formulario.style.visibility = "visible";
    }
  });

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
