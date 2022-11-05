function createGame(player1, hour, player2) {
  return `
    <li>
        <img src="./assets/icon-${player1}.svg" alt="Bandeira do ${player1}">
        <strong>${hour}</strong>
        <img src="./assets/icon-${player2}.svg" alt="Bandeira do ${player2}">
    </li>
    `
}

let delay = -0.4
function createCard(date, day, games) {
  delay = delay + 0.4
  return `
    <div class="card" style="animation-delay: ${delay}s">
        <h2>${date} <span>${day}</span></h2>
        <ul>
            ${games}
        </ul>
    </div>
    `
}

document.querySelector("#cards").innerHTML =
  createCard("22/11", "terça", createGame("france", "16:00", "australia")) +
  createCard("24/11", "quinta", createGame("brazil", "16:00", "serbia")) +
  createCard("26/11", "sábado", createGame("france", "13:00", "denmark")) +
  createCard("28/11", "segunda", createGame("brazil", "13:00", "switzerland")) +
  createCard("30/11", "quarta", createGame("france", "12:00", "tunisia")) +
  createCard("02/12", "sexta", createGame("brazil", "16:00", "cameroon"))
