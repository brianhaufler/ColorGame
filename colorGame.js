var numColors = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var message = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetButton = document.getElementById("reset");
var modeButtons = document.querySelectorAll(".mode");


init();

function init() {
    // mode button event listeners
    setUpModeButtons();
    setUpSquares();
    resetButton.addEventListener("click", function() {
        reset();
    });
    reset();
}


function setUpModeButtons() {
    for (var i = 0; i < modeButtons.length; i++) {
        modeButtons[i].addEventListener("click", function() {
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected")
            if(this.textContent==="Easy") {
                numSquares = 3;
            } else {
                numSquares = 6;
            }
            reset();
        });
    }
}

function setUpSquares() {
    for (var i = 0; i <squares.length; i++) {
        // add click listeners to squares
        squares[i].addEventListener("click", function() {
            // grabs color of clicked square
            var squareColor = this.style.backgroundColor;
            if (squareColor === pickedColor) {
                message.textContent = "Correct!";
                changeColors(squareColor);
                h1.style.backgroundColor = squareColor;
                resetButton.textContent = "Play Again?"
            }
            else {
                this.style.backgroundColor = "#232323";
                message.textContent = "Try Again";
            }
            //compares color to pickedColor
        });
    }
}

function reset() {
    colors = generateColors(numColors);
    // pick new color
    pickedColor = randomPickedColor();
    // change square colors
    for (var i = 0; i <squares.length; i++) {
        if (colors[i]) {
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].display = "none";
        }
    }
    // resets h1 background
    h1.style.backgroundColor = "steelblue";
    // changes color rgb() display
    colorDisplay.textContent = pickedColor;
    // removes message
    message.textContent = "";
    resetButton.textContent = "New Colors"
}

function randomPickedColor() {
    var randomNum = Math.floor(Math.random() * colors.length);
    return colors[randomNum];
}

function generateColors(num) {
    var arr = [];
    for (var i = 0; i<num; i++) {
        arr[i] = randomColor();
    }
    return arr;
}

function randomColor() {
    return "rgb(" + random256() + ", " + random256() + ", " + random256() + ")";
}

function random256() {
    return Math.floor(Math.random() * 257)
}

function changeColors(color) {
    for (var i = 0; i<colors.length; i++) {
        squares[i].style.backgroundColor = color;
    }
}