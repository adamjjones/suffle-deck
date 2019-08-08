const deck = [
  'AD',
  '2D',
  '3D',
  '4D',
  '5D',
  '6D',
  '7D',
  '8D',
  '9D',
  '10D',
  'JD',
  'QD',
  'KD',
  'AH',
  '2H',
  '3H',
  '4H',
  '5H',
  '6H',
  '7H',
  '8H',
  '9H',
  '10H',
  'JH',
  'QH',
  'KH',
  'AS',
  '2S',
  '3S',
  '4S',
  '5S',
  '6S',
  '7S',
  '8S',
  '9S',
  '10S',
  'JS',
  'QS',
  'KS',
  'AC',
  '2C',
  '3C',
  '4C',
  '5C',
  '6C',
  '7C',
  '8C',
  '9C',
  '10C',
  'JC',
  'QC',
  'KC'
]

const shuffleDeck = () => {
  // Iterate through the array
  for (let i = deck.length - 1; i >= 0; i--) {
    const j = Math.floor(Math.random() * i)
    const val = deck[i]
    // console.log(i, j, val, deck)
    deck[i] = deck[j]
    deck[j] = val
    document.querySelector('p').textContent = deck[i]
  }
}

const main = () => {
  if (document.querySelector('h1.hello-world')) {
    document.querySelector('h1.hello-world').textContent
    shuffleDeck()
  }
}

document.addEventListener('DOMContentLoaded', main)

document.querySelector('p').addEventListener('click', shuffleDeck)
