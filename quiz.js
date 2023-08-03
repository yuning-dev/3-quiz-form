let emojis = [0x1F600, 0x1F604, 0x1F34A, 0x1F344, 0x1F37F, 0x1F363, 0x1F370, 0x1F355,
    0x1F354, 0x1F35F, 0x1F6C0, 0x1F48E, 0x1F5FA, 0x23F0, 0x1F579, 0x1F4DA,
    0x1F431, 0x1F42A, 0x1F439, 0x1F424];

function congratulate1() {
    let randomInt = generateInteger(20)
    let result = document.getElementById("result1")
    result.innerText = String.fromCodePoint(0x1F389) + " Congratulation, that's the correct answer! " + String.fromCodePoint(emojis[randomInt])
    result.style.color = "#33991A"
}

function congratulate2() {
    let randomInt = generateInteger(20)
    let result = document.getElementById("result2")
    result.innerText = String.fromCodePoint(0x1F389) + " Congratulation, that's the correct answer! " + String.fromCodePoint(emojis[randomInt])
    result.style.color = "#33991A"
}

function congratulate3() {
    let randomInt = generateInteger(20)
    let result = document.getElementById("result3")
    result.innerText = String.fromCodePoint(0x1F389) + " Congratulation, that's the correct answer! " + String.fromCodePoint(emojis[randomInt])
    result.style.color = "#33991A"
}

function generateInteger(max) {
    let randomNum = Math.random()
    let limitedNum = randomNum * max
    let integer = Math.floor(limitedNum)
    return integer
}

function showCorrectAnswer1() {
    let resultDiv = document.getElementById("result1")
    resultDiv.innerText = "That's incorrect. " + "The correct answer is " + "5m" + "."
    resultDiv.style.color = "#FF4D4D"
}

function showCorrectAnswer2() {
    let resultDiv = document.getElementById("result2")
    resultDiv.innerText = "That's incorrect. " + "The correct answer is " + "A dinner plate" + "."
    resultDiv.style.color = "#FF4D4D"
}

function showCorrectAnswer3() {
    let resultDiv = document.getElementById("result3")
    resultDiv.innerText = "That's incorrect. " + "The correct answer is " + "Sea otter" + "."
    resultDiv.style.color = "#FF4D4D"
}

