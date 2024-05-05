var totalScore = 0

function checkAnswer1(answer) {
    var result = document.getElementById('result1'),
        score = document.getElementById('score1')

    if (answer == 1) {
        result.textContent = "ถูกต้อง"
        result.style.color = 'green'
        score.value = "1"
    }
    else {
        result.textContent = "ไม่ถูกต้อง กรุณาเลือกคำตอบที่ถูกต้อง"
        result.style.color = 'red'
        score.value = "0"
    }

    displayTotalScore()
}

function checkAnswer2(answer) {
    var result = document.getElementById('result2'),
        score = document.getElementById('score2')

    if (answer == 1) {
        result.textContent = "ถูกต้อง"
        result.style.color = 'green'
        score.value = "1"
    }
    else {
        result.textContent = "ไม่ถูกต้อง กรุณาเลือกคำตอบที่ถูกต้อง"
        result.style.color = 'red'
        score.value = "0"
    }

    displayTotalScore()
}

function displayTotalScore() {
    var total = document.getElementById('total'),
        score1 = document.getElementById('score1').value,
        score2 = document.getElementById('score2').value
    total.textContent = Number(score1) + Number(score2)
}