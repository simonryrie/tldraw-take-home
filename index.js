const emojis = ['⭐', '🔥', '💖', '👍', '👎'];

let stickerCount = 0;

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

function createSticker() {
  const ghostSticker = document.querySelector('.ghost-sticker');
  if (ghostSticker.textContent !== '') {
    stickerCount++;
    const sticker = document.createElement('div');
    sticker.classList.add('sticker');
    sticker.textContent = ghostSticker.textContent;
    sticker.style.top = `${ghostSticker.offsetTop}px`;
    sticker.style.left = `${ghostSticker.offsetLeft}px`;
    sticker.setAttribute('id', `sticker-${stickerCount}`);
    document.getElementById('canvas').appendChild(sticker);
  }
}

document.addEventListener('mousedown', (event) => {
    const circle = document.createElement('div');
    circle.classList = 'circle';
    document.body.appendChild(circle);
    circle.style.top = `${event.clientY -60}px`;
    circle.style.left = `${event.clientX -60}px`;
    document.addEventListener('mouseup', () => {
        circle.style.display = 'none';
      });
});

document.getElementById('canvas').addEventListener('click', createSticker);
document.addEventListener('DOMContentLoaded', createGhostSticker);
createButtons();