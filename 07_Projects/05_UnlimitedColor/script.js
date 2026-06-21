const HEX_CHARS  = '0123456789ABCDEF'
const INTERVAL_MS = 1000;
let intervalId = null;

//generate random color 
const randomColor = function(){
  
  let color = '#';

  for(let i = 0; i < 6; i++){
    color += HEX_CHARS[Math.floor(Math.random() * 16)];
    
  }
  return color;
}

//CHANGE BACKGROUND
const changeBg = () => {
  document.body.style.backgroundColor = randomColor();
}

//startChangingBg
const startChangingBg = () => {
  if(intervalId) return;
  intervalId = setInterval(changeBg,INTERVAL_MS)
}

const start = document.querySelector('#start')
  if(start){
    start.addEventListener('click', startChangingBg);
  }

//stopChangingBg
const stopChangingBg = () => {
  if(intervalId){
    clearInterval(intervalId)
    intervalId = null;
  }
}

const stop = document.querySelector('#stop')
if(stop){
  stop.addEventListener('click', stopChangingBg)
}


