let fighters = ["🐉", "🐥", "🐊","💩", "🦍", "🐢", "🐩", "🦭", "🦀", "🐝", "🤖", "🐘", "🐸", "🕷","🐆", "🦕", "🦁"]

let stageEl = document.getElementById("stage")
let fightButton = document.getElementById("fightButton")

fightButton.addEventListener("click", function() {
    // Challenge:
    // When the user clicks on the "Pick Fighters" button, pick two random 
    // emoji fighters and display them as i.e. "🦀 vs 🐢" in the "stage" <div>.
    function getRandomInt(max) {
      return Math.floor(Math.random() * max)
    }
    let player1 = fighters[getRandomInt(fighters.length)]
    let player2 = fighters[getRandomInt(fighters.length)]
    stageEl.textContent = player1 + " vs " + player2
    
})
