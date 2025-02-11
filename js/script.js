









let display = document.querySelector(".text");
let buttons = document.querySelectorAll(".button, .plus, .egal, .clear");
let currentInput = "";

buttons.forEach( button => {
    button.addEventListener("click", () => {
        let value = button.textContent;

        if (value === "Clear") {
            currentInput = "";
        } else if (value === "=") {
            currentInput = eval(currentInput); 
        } else {
            currentInput += value;
        }

        display.textContent = currentInput;
    });
});