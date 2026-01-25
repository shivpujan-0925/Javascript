const clock = document.getElementById('clock')
// const clock= document.querySelector('#clock')

setInterval(function(){
       let date = new Date();
       const time = date.toLocaleTimeString();
       clock.innerHTML=time;
},1000)
