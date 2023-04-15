window.onload = () => {
  let corazon = document.getElementById(
    "corazoncito"
  );
  let fondoCorazon = document.querySelector(
    ".fondoCorazon"
  );
  let estrellita = document.querySelector(
    "#estrellita"
  );
  const formulario = document.querySelector(
    ".formularioContainer"
  );
  const cerrarIcon = document.querySelector(
    "#cerrar_icon_8"
  );
  const buttonsContainer = document.querySelector(
    ".buttonsContainer"
  );

  cerrarIcon.addEventListener("mousedown", () => {
    cerrarBehavior();
  });
  function cerrarBehavior() {
    formulario.style.visibility = "hidden";
    buttonsContainer.style.visibility = "visible";
    cerrarIcon.setAttribute("width", "200");
  }

  estrellita.addEventListener("click", () => {
    console.log(formulario.style.visibility);

    if (
      !formulario.style.visibility ||
      formulario.style.visibility == "hidden"
    ) {
      formulario.style.visibility = "visible";
      buttonsContainer.style.visibility =
        "hidden";
      formulario.style.gridArea = "1 / 2 / 6 / 5";
    } else {
      formulario.style.visibility = "hidden";
    }
  });

  corazon.addEventListener("click", () => {
    changeColor();
  });
  function changeColor() {
    console.log(
      "1° test: " + !fondoCorazon.style.fill
    );
    if (!fondoCorazon.style.fill) {
      fondoCorazon.style.fill = "#e1338b";
      fondoCorazon.style.animation =
        "disolver 1 1.2s";
      console.log(
        fondoCorazon.style.animationName +
          " transition added"
      );
    } else {
      fondoCorazon.style.animationName = "none";
      fondoCorazon.style.fill = "";
      console.log(
        fondoCorazon.style.animationName
      );
    }
  }
};
const changeToYellow = () => {
  const bodyImage =
    document.querySelector(".container");
  bodyImage.style.transition = "all 3s";
  bodyImage.style.filter =
    "hue-rotate(99deg) saturate(300%) contrast(90%) brightness(190%)";
};
