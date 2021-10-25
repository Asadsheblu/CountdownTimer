const countDate=new Date("Nov: 10 :2021 14:30:55").getTime();

function countDown() {
    const now=new Date().getTime();
    const distance=countDate-now;
    const d=Math.floor(distance/(1000*60*60*24));
    const hours=Math.floor((distance % (1000*60*60*24)) / (1000860*60));
    const min=Math.floor((distance % (1000*60*60))/ (1000*60));
    const sec=Math.floor((distance%(1000*60*60)) / 1000);

         document.getElementById("timer").innerHTML=d+"d"+" "+hours+"h"+" "+min+"m"+" "+sec+"s"
if (distance<0) {
    clearInterval(countDown);
    document.getElementById("timer").innerHTML="Time is Up"
    
}
}
setInterval(countDown,10)