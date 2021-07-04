const choices = document.querySelectorAll('.choice')
const score = document.getElementById('score')
const result = document.getElementById('result')
const restart = document.getElementById('restart')
const modal = document.getElementById('modal')

const scoreBoard = {
    player: 0, 
    computer:0 
}

// Play Game

function play(e){
    const playerChoice = e.target.id
    restart.style.display = 'inline-block'
    const computerChoice = getComputerChoice()
    const winner = getWinner(playerChoice, computerChoice)
    showWinner(winner, computerChoice, playerChoice)
    console.log('playerChoice', playerChoice)
    console.log('computerChoice', computerChoice)
    console.log('winner', winner)
}

// Get Computer Choice
function getComputerChoice(){
    const rand = Math.random()
    if(rand < .34){
        return 'rock'
    }else if(rand <= .67){
        return 'paper'
    }else{
        return 'scissors'
    }
}

// Get Game Winner
function getWinner(player, computer){
    if(player === computer){
        return 'draw'
    }else if(player ==='rock'){
        if(computer === 'paper'){
            return 'computer'
        }else{
            return 'player'
        }
    }else if(player === 'paper'){
        if(computer === 'scissors'){
            return 'computer'
        }else{
            return 'player'
        }
    }else if(player === 'scissors'){
        if(computer === 'rock'){
            return 'computer'
        }else{
            return 'player'
        }
    }
}

function showWinner(winner, computer, player){
    if(winner === 'player'){
        // Increment player score
        scoreBoard.player++
        // Show modal result
        result.innerHTML = `
            <h1 class='text-win'>You Won</h1>
            <div class='answer-choice'>You Chose: ${player}</div>
            <p>Computer Chose: ${computer}</p>
            `
    }else if(winner === 'computer'){
        // Increment computer score
        scoreBoard.computer++
        // Show modal result
        result.innerHTML = `
            <h1 class='text-lose'>You Lost</h1>
            <div class='answer-choice'>You Chose: ${player.charAt(0).toUpperCase() + player.slice(1)}</div>
            <p>Computer Chose: ${computer.charAt(0).toUpperCase() + computer.slice(1)}</p>
            `
    }else{
         // Show modal result
         result.innerHTML = `
         <h1 class=''>It's a Draw</h1>
         <div class='answer-choice'>You Chose: ${player.charAt(0).toUpperCase() + player.slice(1)}</div>
         <p>Computer Chose: ${computer.charAt(0).toUpperCase() + computer.slice(1)}</p>
         `
    }

    // Show Score
    score.innerHTML = `
        <p class="player">Player: ${scoreBoard.player}</p>   
        <p class="computer">Computer: ${scoreBoard.computer}</p>
        `

    modal.style.display = 'block'
}


function clearModal(e){
    if(e.target == modal){
        modal.style.display = 'none'
    }
}
// Event Listeners

choices.forEach(choice => {
    choice.addEventListener('click', play)
})

window.addEventListener('click', (e) => {
    clearModal(e)
})

restart.addEventListener('click', () => {
    scoreBoard.player = 0
    scoreBoard.computer = 0
    score.innerHTML = `
    <p class="player">Player: 0</p>
    <p class="computer">Computer: 0</p>
    `
})