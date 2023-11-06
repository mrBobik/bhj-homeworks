const dead = document.querySelector("#dead");
const lost = document.querySelector("#lost");


let hole = document.querySelectorAll('.hole');
for (let i = 0; i < hole.length; i++) {
    hole[i].addEventListener("click", myFunction);
}

let hit = 0;
let miss = 0;
let totalWin = 5


function myFunction() {
    if (this.className.includes("hole_has-mole")) {
        hit++;
        dead.textContent = hit;
    } else {
        miss++;
        lost.textContent = miss;
    }
    if (totalWin === hit) {
        alert('Ты победил!!!  Промахов ' + (miss));
        dead.textContent = 0;
        lost.textContent = 0;
        hit = 0;
        miss = 0;
    }
}
