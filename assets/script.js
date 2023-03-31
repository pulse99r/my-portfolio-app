// alert('Script loaded!')
// add artist image (including mine)
// add a scrollable window for music albums
//add window for details about artist and selected album
//add footer with SM links and link to full resume

let cards = document.querySelectorAll('.card>p')
console.log('cards = ',cards)
for (let i = 0; i < cards.length; i++) {
  const card = cards[i];
  card.setAttribute('class','card-link');
}
console.log('cards = ',cards)  
