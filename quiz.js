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
    resultDiv.innerText = "That's incorrect. The correct answer is " + "5m" + "."
    resultDiv.style.color = "#FF4D4D"
}

function showCorrectAnswer2() {
    let resultDiv = document.getElementById("result2")
    resultDiv.innerText = "That's incorrect. The correct answer is " + "A dinner plate" + "."
    resultDiv.style.color = "#FF4D4D"
}

function showCorrectAnswer3() {
    let resultDiv = document.getElementById("result3")
    resultDiv.innerText = "That's incorrect. The correct answer is " + "Sea otter" + "."
    resultDiv.style.color = "#FF4D4D"
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
        resultDiv.innerText = "That's incorrect. The correct answer is " + "Tuna and Salmon" + "."
        resultDiv.style.color = "#FF4D4D"
    }
}

const imagesArray = ["images/cat.jpg", "images/corgi.jpg", "images/fox.jpg", "images/horse.jpg", "images/kangaroo.jpg", "images/lemur.jpg", "images/robin.jpg", "images/walrus.jpg", "images/zebra.jpg"]
const container = document.getElementById("imageSection")

let currentIndex = 0

function nextImage() {
    currentIndex++
    document.getElementById("mainImg").src = imagesArray[currentIndex - 1]
    if (currentIndex === 9) {
        currentIndex = 0
    }
}

function previousImage() {
    currentIndex--
    document.getElementById("mainImg").src = imagesArray[currentIndex]
    if (currentIndex === -1) {
        currentIndex = 8
    }
}