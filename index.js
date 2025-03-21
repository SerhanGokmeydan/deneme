const badBtn = document.querySelector('#bad');
const goodBtn = document.querySelector('#good');

badBtn.addEventListener("click", () => {
  const randomX = Math.floor(Math.random() * (window.innerWidth - badBtn.clientWidth));
  const randomY = Math.floor(Math.random() * (window.innerHeight - badBtn.clientHeight));

  badBtn.style.position = 'absolute';
  badBtn.style.left = `${randomX}px`;
  badBtn.style.top = `${randomY}px`;
})

goodBtn.addEventListener("click", () => {
  const container = document.querySelector('.container');
  const box = document.querySelector('.box');

  container.style.display = 'none';
  box.classList.add('box-active');
})