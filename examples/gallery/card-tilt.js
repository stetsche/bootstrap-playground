var tiltCards = document.querySelectorAll('.tilt-card');
tiltCards.forEach(function(tiltCard) {
  tiltCard.addEventListener('mousemove', tiltEffect);
  tiltCard.addEventListener('mouseout', resetTilt);
});

function tiltEffect(event) {
  var card = this;
  var cardRect = card.getBoundingClientRect();
  var cardWidth = cardRect.width;
  var cardHeight = cardRect.height;
  var cardCenterX = cardRect.left + cardWidth / 2;
  var cardCenterY = cardRect.top + cardHeight / 2;
  var mouseX = event.clientX;
  var mouseY = event.clientY;
  var angleY = (mouseX - cardCenterX) / cardWidth * 10;
  var angleX = (cardCenterY - mouseY) / cardHeight * 10;

  card.style.transform = 'perspective(1000px) rotateX(' + angleX + 'deg) rotateY(' + angleY + 'deg)';
  card.classList.add('tilt');
}

function resetTilt() {
  var card = this;
  card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
  card.classList.remove('tilt');
}
