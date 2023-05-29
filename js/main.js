document.getElementById("color").addEventListener("click",Background);
function changeBackground(){ 
const symbols = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
];
let color="#";
for(let i=0;i<6;i++){

color+=symbols[Math.flor(Math.random()*16)];
}
document.body.style.background=color;
}