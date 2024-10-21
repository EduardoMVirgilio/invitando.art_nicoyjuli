document.querySelector('#bank').addEventListener('click',(e) => {
    e.preventDefault()
    document.querySelector('#modalDialog').show()
})

document.addEventListener('click',(e) => {
    if(e.target.id != "modalDialog" ) return null
    return e.target.close()
})

let deadline = new Date(2024, 11, 21, 18, 0, 0)
const days = document.querySelector('#days')
const hours = document.querySelector('#hours')
const minutes = document.querySelector('#minutes')
const seconds = document.querySelector('#seconds')
const tempo = document.querySelector('.temporizador');
const countDown = () => {
    let current = new Date()
    let diferencia = deadline.getTime() - current.getTime();
    let dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    let horaActual = current.getHours();
    let minutosActuales = current.getMinutes();
    let segundosActuales = current.getSeconds();
    let horasRestantes = deadline.getHours() - horaActual;
    let minutosRestantes = (deadline.getMinutes() - minutosActuales + 60) % 60;
    let segundosRestantes = (deadline.getSeconds() - segundosActuales + 60) % 60;
    if (segundosRestantes < 0) {
        minutosRestantes--;
        segundosRestantes += 60;
    }
    if (minutosRestantes < 0) {
        horasRestantes--;
        minutosRestantes += 60;
    }
    let intervalo = setInterval(countDown, 1000)
    if (dias > 0) {
        days.innerHTML = `${String(dias).padStart(2, "0")}`
        hours.innerHTML = `${String(horasRestantes).padStart(2, "0")}`
        minutes.innerHTML = `${String(minutosRestantes).padStart(2, "0")}`
        seconds.innerHTML = `${String(segundosRestantes).padStart(2, "0")}`
    } else {
        clearInterval(intervalo);
        tempo.innerHTML = `<li><p>Llegó el gran día!!!</p></li>`
    }

}

countDown()