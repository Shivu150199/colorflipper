const colors = [
  'green',
  'red',
  'rgba(133,122,200)',
  'gray',
  'orange',
  'aqua',
  
]

const btn = document.querySelector('.btn')
const color = document.querySelector('.color')

//random number function
function getRandomNumber() {
  return Math.floor(Math.random() * colors.length)
}

//buttun click
btn.addEventListener('click', function () {
  //get random number between 0to 3
  const randomNumber = getRandomNumber()
  console.log(randomNumber)

  document.body.style.backgroundColor = colors[randomNumber]
  color.textContent = colors[randomNumber]
})
