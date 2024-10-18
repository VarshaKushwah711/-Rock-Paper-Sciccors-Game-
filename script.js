document.addEventListener('DOMContentLoaded', () => {
    const userChoiceDisplay = document.getElementById('user-choice');
    const computerChoiceDisplay = document.getElementById('computer-choice');
    const winnerDisplay = document.getElementById('winner');

    const choices = ['rock', 'paper', 'scissors'];

    function getComputerChoice() {
        const randomIndex = Math.floor(Math.random() * choices.length);
        return choices[randomIndex];
    }

    function determineWinner(userChoice, computerChoice) {
        if (userChoice === computerChoice) {
            return 'Draw! 🤝';
        } else if (
            (userChoice === 'rock' && computerChoice === 'scissors') ||
            (userChoice === 'paper' && computerChoice === 'rock') ||
            (userChoice === 'scissors' && computerChoice === 'paper')
        ) {
            return 'You Win! 🥳';
    } else {
        return 'Computer Wins! 😢';
    }
    }

    function handleUserChoice(event) {
        const userChoice = event.target.id;
        const computerChoice = getComputerChoice();

        userChoiceDisplay.textContent = `Your Choice: ${userChoice}`;
        computerChoiceDisplay.textContent = `Computer's Choice: ${computerChoice}`;
        winnerDisplay.textContent = `Winner: ${determineWinner(userChoice, computerChoice)}`;
    }

    document.getElementById('rock').addEventListener('click', handleUserChoice);
    document.getElementById('paper').addEventListener('click', handleUserChoice);
    document.getElementById('scissors').addEventListener('click', handleUserChoice);
});
