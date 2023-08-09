let emojis = [0x1F600, 0x1F604, 0x1F34A, 0x1F344, 0x1F37F, 0x1F363, 0x1F370, 0x1F355,
    0x1F354, 0x1F35F, 0x1F6C0, 0x1F48E, 0x1F5FA, 0x23F0, 0x1F579, 0x1F4DA,
    0x1F431, 0x1F42A, 0x1F439, 0x1F424];

function congratulate(resultDiv) {
    let randomInt = generateInteger(20)
    let result = document.getElementById(resultDiv)
    result.innerText = String.fromCodePoint(0x1F389) + " Congratulation, that's the correct answer! " + String.fromCodePoint(emojis[randomInt])
    result.style.color = "#33991A"
}

function congratulate1() {
    let resultDiv = "result1"
    congratulate(resultDiv)
}

function congratulate2() {
    let resultDiv = "result2"
    congratulate(resultDiv)
}

function congratulate3() {
    let resultDiv = "result3"
    congratulate(resultDiv)
}

function generateInteger(max) {
    let randomNum = Math.random()
    let limitedNum = randomNum * max
    let integer = Math.floor(limitedNum)
    return integer
}

function showCorrectAnswer(resultDiv, correctAnswer) {
    let result = document.getElementById(resultDiv)
    result.innerText = "That's incorrect. The correct answer is " + correctAnswer + "."
    result.style.color = "#FF4D4D"
}

function showCorrectAnswer1() {
    let resultDiv = "result1"
    let correctAnswer = "5m"
    showCorrectAnswer(resultDiv, correctAnswer)
}

function showCorrectAnswer2() {
    let resultDiv = "result2"
    let correctAnswer = "a dinner plate"
    showCorrectAnswer(resultDiv, correctAnswer)
}

function showCorrectAnswer3() {
    let resultDiv = "result3"
    let correctAnswer = "sea otter"
    showCorrectAnswer(resultDiv, correctAnswer)
}

function checkTextInput() {
    let randomInt = generateInteger(20)
    let userInput = Number(document.getElementById("flightSpeed").value)
    let resultDiv = document.getElementById("result4")
    if (userInput === 35) {
        resultDiv.innerText = String.fromCodePoint(0x1F389) + " Congratulation, that's the correct answer! " + String.fromCodePoint(emojis[randomInt])
        resultDiv.style.color = "#33991A"
    }
    else {
        resultDiv.innerText = "That's incorrect. The correct answer is " + "35 miles per hour" + "."
        resultDiv.style.color = "#FF4D4D"
    }
}

function checkSelection() {
    let checkbox = document.getElementsByName("mostEatenFish")
    let button = document.getElementById("confirmSelection")
    let resultDiv = document.getElementById("result5")
    let randomInt = generateInteger(20)
    for (let i = 0; i < checkbox.length; i++) {
        checkbox[i].addEventListener("change", () => {
        });
    }
    if (checkbox[0].checked === true && checkbox[1].checked === true && checkbox[2].checked === false && checkbox[3].checked === false) {
        resultDiv.innerText = String.fromCodePoint(0x1F389) + " Congratulation, that's the correct answer! " + String.fromCodePoint(emojis[randomInt])
        resultDiv.style.color = "#33991A"
    }
    else {
        resultDiv.innerText = "That's incorrect. The correct answer is " + "tuna and salmon" + "."
        resultDiv.style.color = "#FF4D4D"
    }
}

function submitQuiz() {
    let answerStatus = [0, 0, 0, 0, 0]
    let checkedButton1 = document.querySelector('input[name="giraffeHeight"]:checked').value
    if (checkedButton1 === "5m") {
        congratulate1()
        answerStatus[0] = 1
    }  else {
        showCorrectAnswer1()
    }
    let checkedButton2 = document.querySelector('input[name="eyesSize"]:checked').value
    if (checkedButton2 === "plate") {
        congratulate2()
        answerStatus[1] = 1
    }  else {
        showCorrectAnswer2()
    }
    let checkedButton3 = document.querySelector('input[name="densestFur"]:checked').value
    if (checkedButton3 === "seaOtter") {
        congratulate3()
        answerStatus[2] = 1
    }  else {
        showCorrectAnswer3()
    }
    checkSelection()
    let checkbox = document.getElementsByName("mostEatenFish")
    if (checkbox[0].checked === true && checkbox[1].checked === true && checkbox[2].checked === false && checkbox[3].checked === false) {
        answerStatus[3] = 1
    }
    checkTextInput()
    let userInput = Number(document.getElementById("flightSpeed").value)
    if (userInput === 35) {
        answerStatus[4] = 1
    }
    let userScore = answerStatus[0] + answerStatus[1] + answerStatus[2] + answerStatus[3] + answerStatus[4]
    let finalResult = document.getElementById("finalResult")
    if (userScore <=2) {
        finalResult.innerText = "Oh no! You only scored " + userScore + " out of 5. " + String.fromCodePoint(0x1F63F)
        finalResult.style.color = "purple"
    }
    if (userScore === 3) {
        finalResult.innerText = "Congratulations, you scored 3 out of 5. Not bad at all lad/lass! " + String.fromCodePoint(0x1F60E)
        finalResult.style.color = "blue"
    }
    if (userScore >= 4) {
        finalResult.innerText = "Congratulations, you scored " + userScore + " out of 5. You've done exceedlingly well. " + String.fromCodePoint(0x1F379)
        document.getElementById("optionalImage").style.display = "block"
        finalResult.style.color = "fuchsia"
    }
}

const imagesArray = ["images/dog.jpg", "images/cat.jpg", "images/corgi.jpg", "images/fox.jpg", "images/horse.jpg", "images/kangaroo.jpg", "images/lemur.jpg", "images/robin.jpg", "images/walrus.jpg", "images/zebra.jpg"]
const container = document.getElementById("imageSection")

let currentIndex = 0

function nextImage() {
    currentIndex++
    if (currentIndex >= 10) {
        currentIndex = 0
    }
    document.getElementById("mainImg").src = imagesArray[currentIndex]
}

function previousImage() {
    currentIndex--
    if (currentIndex < 0) {
        currentIndex = 9
    }
    document.getElementById("mainImg").src = imagesArray[currentIndex]
}