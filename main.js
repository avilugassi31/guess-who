'use strict'
console.log('Yalla Maccabi');

var gQuests = [
    { id: 1, opts: ['Sofoklis Shortzianitis', 'Giannis Antetokumbo'], correctOptIndex: 0 },
    { id: 2, opts: ['Lior Eliyahu', 'Omri Casspi'], correctOptIndex: 1 },
    { id: 3, opts: ['Moti Aroesti', 'Miki Berckovich'], correctOptIndex: 1 },
    { id: 4, opts: ['Anthony Parker', 'Will Baynum'], correctOptIndex: 0 },
    { id: 5, opts: ['Nicola Vujicic', 'Sarunas Jasikevicius'], correctOptIndex: 1 }
]
var gCurrQuestIdx = 0;
var gGameOver = false;
var audioWin = new Audio('sound/win.mp3');
var audioLose = new Audio('sound/wrong.mp3')
var audioRight = new Audio('sound/right.mp3')


function init() {
    if (gGameOver) {
        gCurrQuestIdx = 0;
        gGameOver = false;
    }
    renderOptions()
}

function answer(idx) {
    console.log({ idx, gCurrQuestIdx })

    if (gGameOver) return alert('Game is over - Play Again');

    if (gQuests[gCurrQuestIdx].correctOptIndex === idx) {
        audioRight.play();
        gCurrQuestIdx++;


        if (gCurrQuestIdx === gQuests.length) {
            audioWin.play();
            gCurrQuestIdx = 0;
            gGameOver = true;
        } else {
            renderOptions();
        }
    } else {
        audioLose.play();
    }

}




function renderOptions() {
    var elImg = document.querySelector('img');
    elImg.src = `img/${gQuests[gCurrQuestIdx].id}.jpg`;
    var strHtml = '';
    for (var i = 0; i < gQuests[gCurrQuestIdx].opts.length; i++) {
        var currAnswer = gQuests[gCurrQuestIdx].opts[i];
        strHtml += `<div class=" button${i + 1}" onclick="answer(${i})">${currAnswer}</div>`;
        // console.log(strHtml)
        var elOptions = document.querySelector('.options');
        elOptions.innerHTML = strHtml
        console.log(elOptions)
    }
}




