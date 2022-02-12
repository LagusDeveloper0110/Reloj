window.addEventListener("load", () => {
  let horaHTML = document.getElementById("hora");
  let minutosHTML = document.getElementById("minutos");
  let segundosHTML = document.getElementById("segundos");

  const mostrarHora = () => {
      let fecha = new Date()
      let hora = fecha.getHours()
      let minutos = fecha.getMinutes()
      let segundos = fecha.getSeconds()

      horaHTML.textContent = String(hora).padStart(2, '0')
      minutosHTML.textContent = String(minutos).padStart(2, '0')
      segundosHTML.textContent = String(segundos).padStart(2, '0')

      setTimeout(mostrarHora, 1000)
  };
  mostrarHora();
});
