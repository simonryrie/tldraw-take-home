const emojis = ['⭐', '🔥', '💖', '👍', '👎'];

function createButtons() {
    const buttonsBar = document.getElementById('buttonsBar');
    emojis.forEach(emoji => {
      const button = document.createElement('button');
      button.type = 'button';
      button.classList.add('button');
      button.textContent = emoji;
      buttonsBar.appendChild(button);
    });
}

createButtons()