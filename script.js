let sec = document.querySelector("#sec");
let min = document.querySelector("#min");
let hr = document.querySelector("#hr");
let start = document.querySelector(".start");
let pause = document.querySelector(".pause");
let reset = document.querySelector(".reset");

let secT = 00;
let minT = 00;
let hrT = 00;
let paused = true;
let int = null;

function timer() {
  secT++;
  if (secT > 59) {
    minT++;
    secT = 0;
    min.innerHTML = minT < 10 ? "0" + minT : minT;
    sec.innerHTML = secT < 10 ? "0" + secT : secT;
  } else if (minT > 59) {
    hrT++;
    minT = 0;
    hr.innerHTML = hrT < 10 ? "0" + hrT : hrT;
    min.innerHTML = minT < 10 ? "0" + minT : minT;
  } else {
    sec.innerHTML = secT < 10 ? "0" + secT : secT;
  }
}

start.addEventListener("click", () => {
  int = setInterval(timer, 1000);
  // if(int != null){
  //   clearInterval(int);
  // }
});

pause.addEventListener("click", () => {
  clearInterval(int);
});

reset.addEventListener("click", () => {
  clearInterval(int);
  secT = 00;
  minT = 00;
  hrT = 00;
  sec.innerHTML = secT > 0 ? "00" : "00";
  min.innerHTML = minT > 0 ? "00" : "00";
  hr.innerHTML = hrT > 0 ? "00" : "00";
});
