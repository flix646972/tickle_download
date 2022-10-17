var abc = document.getElementsByTagName("a");
var zx = document.querySelectorAll(".fib");

let timeSecond = 5;
var timeH = document.querySelectorAll(".epd .bdcontainer h1");

displayTime(timeSecond);

const countDown = setInterval(() => {
  timeSecond--;
  displayTime(timeSecond);
  if (timeSecond == 0 || timeSecond < 1) {
    endCount();
    clearInterval(countDown);
  }
}, 1000);


function displayTime(second) {
  const min = Math.floor(second / 60);
  const sec = Math.floor(second % 60);
  for(var l=0;l<timeH.length;l++){
    timeH[l].innerHTML = `
    ${min < 10 ? "0" : ""}${min}:${sec < 10 ? "0" : ""}${sec}
    `;
  }
 
}

function endCount() {
  for(var l=0;l<timeH.length;l++){
    timeH[l].innerHTML = "";
  };
  for (var i = 0; i < abc.length; i++) {
    abc[i].style.display = "block";
};
for(var j= 0;j< zx.length; j++){
  zx[j].style.display = "none";
}
}
