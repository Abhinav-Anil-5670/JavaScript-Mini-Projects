const hex = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']
//Hex Colors = #- followed 6 characters/numbers

const btn = document.getElementById('btn')
const color = document.querySelector(".color")

btn.addEventListener('click', () => {
    let hexColor = '#';
    
    for (let i = 0; i < 6; i++){
        hexColor+=hex[getRandomNumber()]
    }
    console.log(hexColor);
    color.textContent = hexColor
    document.body.style.backgroundColor = hexColor
})

function getRandomNumber(){
    return Math.floor(Math.random()*hex.length)//.floor - rounding up to the nearest number
}

