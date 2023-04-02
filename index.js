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

function createGhostSticker() {
    const ghostSticker = document.createElement('div');
    ghostSticker.classList.add('ghost-sticker');
    ghostSticker.style.fontSize = getComputedStyle(document.documentElement).getPropertyValue('--emoji-size');
    ghostSticker.textContent = '';
    document.body.appendChild(ghostSticker);
  
    const buttons = document.querySelectorAll('.button');
    buttons.forEach(button => {
      button.addEventListener('click', () => {
        ghostSticker.textContent = button.textContent;
      });
    });
  
    document.addEventListener('mousemove', (event) => {
      ghostSticker.style.top = `${event.clientY - 47.5}px`;
      ghostSticker.style.left = `${event.clientX - 47.5}px`;
    });
}
  
createGhostSticker();
createButtons();