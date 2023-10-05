var timer = 60;
var score = 0;
var hitrn = 0;

function getNewHit() {
    hitrn = Math.floor(Math.random() * 10)
    document.querySelector('#hitVal').textContent = hitrn
}

function increaseScore() {
    score += 10
    document.querySelector('#scoreVal').textContent = score
}
function makeBubble() {
    var clutter = ""
    for (i = 1; i <= 128; i++) {
        var rn = Math.floor(Math.random() * 10)
        clutter += `<div class="bubble">${rn}</div>`
    }
    document.querySelector("#pbtm").innerHTML = clutter
}

function runTimer() {

    const interval = setInterval(function () {
        if (timer > 0) {
            timer--
            document.querySelector("#timerValue").textContent = timer
        } else {
            clearInterval(interval)
            document.querySelector("#pbtm").innerHTML = `<h1>Game Over</h1>`
        }
    }, 1000)
}
makeBubble()
runTimer()
getNewHit()
// increaseScore()

document.querySelector("#pbtm").addEventListener('click', function (e) {
    if (Number(e.target.textContent) === hitrn) {
        increaseScore()
        getNewHit()
        makeBubble()

    }
})