let count = 0;
let number = document.getElementById("number");

let add = document.getElementById("increment");
add.addEventListener("click", ()=> {
count = count + 1;
number.innerText = count;
}); 

let subtract = document.getElementById("decrement");
subtract.addEventListener("click", ()=> {
count = count - 1;
number.innerText = count;
});


let reset = document.getElementById("reset");
reset.addEventListener("click", ()=> {
count = 0;
number.innerText = count;
});