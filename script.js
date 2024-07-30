const adviceId = document.getElementById('advice-id');
const adviceText = document.getElementById('advice-text');
const diceButton = document.getElementById('dice-button');

async function getAdvice() {
    try {
        const response = await fetch('https://api.adviceslip.com/advice?t=' + new Date().getTime());
        const data = await response.json();
        
        adviceId.textContent = data.slip.id;
        adviceText.textContent = `"${data.slip.advice}"`;
    } catch (error) {
        console.error('Error fetching advice:', error);
        adviceText.textContent = 'An error occurred while fetching advice. Please try again.';
    }
}

diceButton.addEventListener('click', getAdvice);

document.addEventListener('DOMContentLoaded', getAdvice);