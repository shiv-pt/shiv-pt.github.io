document.addEventListener('DOMContentLoaded',()=> {
const cardArray = [
{
name: 'car',
img: 'car.jpg'
},
{
name: 'aeroplane',
img: 'aeroplane.png'
},
{
name: 'ship',
img: 'ship.png'
},
{
name: 'scooter',
img: 'scooter.jpg'
},
{
name: 'helicopter',
img: 'helicopter.jpg'
},
{
name: 'train',
img: 'train.jpg'
},
{
name: 'car',
img: 'car.jpg'
},
{
name: 'aeroplane',
img: 'aeroplane.png'
},
{
name: 'ship',
img: 'ship.png'
},
{
name: 'scooter',
img: 'scooter.jpg'
},
{
name: 'helicopter',
img: 'helicopter.jpg'
},
{
name: 'train',
img: 'train.jpg'
}
]

cardArray.sort(() => 0.5 - Math.random())
const grid = document.querySelector('.grid')
const resultDisplay = document.querySelector('#result')
var cardsChosen = []
var cardsChosenId = []
var cardsWon=[]

function createBoard() {
for (let i=0; i<cardArray.length; i++) {
var card = document.createElement('img')
card.setAttribute('src','mosaic.jpg')
card.setAttribute('data-id',i)
card.addEventListener('click',flipCard)
grid.appendChild(card)


}
}

function checkForMatch() {
var cards = document.querySelectorAll('img')
const optionOneId = cardsChosenId[0]
const optionTwoId = cardsChosenId[1]
if (cardsChosen[0] === cardsChosen[1]) {
alert('You found a match')
cards[optionOneId].setAttribute('src','white.png')
cards[optionTwoId].setAttribute('src','white.png')
cardsWon.push(cardsChosen)
}
else {

cards[optionOneId].setAttribute('src','mosaic.jpg')
cards[optionTwoId].setAttribute('src','mosaic.jpg')
alert('Sorry, try again')
}
cardsChosen = []
cardsChosenId = []
resultDisplay.textContent = cardsWon.length
if(cardsWon.length===cardArray.length/2) {

result.textContent = 'Congratulations! You found them all!'
}
}


function flipCard() {
var cardId = this.getAttribute('data-id')
cardsChosen.push(cardArray[cardId].name)
cardsChosenId.push(cardId)
this.setAttribute('src', cardArray[cardId].img)
if(cardsChosen.length===2) {
setTimeout(checkForMatch,500)
}
}

createBoard()





  })