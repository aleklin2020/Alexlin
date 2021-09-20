function map(val, minA, maxA, minB, maxB) {
  return minB + ((val - minA) * (maxB - minB)) / (maxA - minA);
}

function Card3D(card, ev) {
  let img = card.querySelector('div');
  let imgRect = card.getBoundingClientRect();
  let width = imgRect.width;
  let height = imgRect.height;
  let mouseX = ev.offsetX;
  let mouseY = ev.offsetY;
  let rotateY = map(mouseX, 10, 280, -25, 35);
  let rotateX = map(mouseY, 10, 450, 25, -35);
 
  
  img.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
 

}

var cards = document.querySelectorAll('.work');

cards.forEach((card) => {
  card.addEventListener('mousemove', (ev) => {
    Card3D(card, ev);
  });
  
  card.addEventListener('mouseleave', (ev) => {
    let img = card.querySelector('div');
    
    img.style.transform = 'rotateX(0deg) rotateY(0deg)';
    img.style.filter = 'brightness(1)';
  });
});