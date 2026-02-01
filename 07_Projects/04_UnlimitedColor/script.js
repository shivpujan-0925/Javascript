const Start = document.querySelector('#start');
const Stop = document.querySelector('#stop');

const randomColor = function () {
  let hex = '0123456789ABCDEF';
  let color = '#';

  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};

// console.log(randomColor())

let intervalId;

const changeBgColor = function () {
  document.body.style.backgroundColor = randomColor();
}

const startChangingColor = function () {

  if(!intervalId){
       intervalId = setInterval(changeBgColor,1000)
  }
};

Start.addEventListener('click', startChangingColor);

const stopChangingColor = function () {
   clearInterval(intervalId);
   intervalId = null;
};
Stop.addEventListener('click', stopChangingColor);
