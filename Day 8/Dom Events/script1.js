// SUBMIT
const input1 = document.getElementById("btn1");
input1.addEventListener("click", function() {
    console.log("Clicked");
})

// INPUT
const input2 = document.querySelector("#btn2");
input2.addEventListener("input", function() {
    console.log("User is typing");
})

// KEYDOWN
const input3 = document.querySelector("#btn3");
input3.addEventListener("keydown", (event) => {
    console.log(`key pressed : ${event.key}`);
})

// CHANGE
const input4 = document.querySelector("#btn4")
input4.addEventListener("change", function() {
    console.log("the user selected a new option");
});

// SUBMIT
const input5 = document.querySelector("#btn5");
input5.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log("form submission intercepted!");
})
// -----------------------------------------------------------------

// FOCUS
const usernameInput = document.getElementById('username');
const hintMessage = document.getElementById('hint-msg');

usernameInput.addEventListener('focus', (event) => {
    
    event.target.style.borderColor = '#007BFF';
    event.target.style.backgroundColor = '#F0F8FF';
    
    hintMessage.style.display = 'block';
});