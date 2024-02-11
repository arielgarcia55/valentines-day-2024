// these are the phrases that will be cycled through when the user clicks on the no button
const noButtonPhrases = [
    "No", 
    "Wait I think you meant to press yes?", 
    "Are you sure?", 
    "Really really really sure?", 
    "Pookie wookie please", 
    "Don't do to this", 
    "You going to make me cry...", 
    "You're breaking my heart :(((",
];

// keeps track of the number of times the user has clicked the no button
let numberOfTimesClicked = 0; 
// this gives us access to the no button and the yes button
const yesButton = document.getElementById("yes-button"); 
const noButton = document.getElementById("no-button");
// we also need to get the DOM element for the gif
const gif = document.getElementById("gif-container");
// we need to access the DOM element for the main text
const mainText = document.getElementById("main-text");

// when the user clicks on the no button, we want the text to change to the next phrase in the array
// we also want the yes button to become bigger as the user clicks on the no button
// we also want the no button to a random position on the screen
noButton.addEventListener("click", () => {
    numberOfTimesClicked++;
    if (numberOfTimesClicked >= noButtonPhrases.length) {
        numberOfTimesClicked = 0;
    }; 
    noButton.textContent = noButtonPhrases[numberOfTimesClicked];
    yesButton.style.fontSize = `${numberOfTimesClicked * 10 + 20}px`;

    const randomX = Math.random() * (window.innerWidth - noButton.clientWidth);
    const randomY = Math.random() * (window.innerHeight - noButton.clientHeight);
    noButton.style.position = 'absolute'; // set position to absolute
    noButton.style.left = `${randomX}px`;
    noButton.style.top = `${randomY}px`;
});

// if the user clicks on the yes button, then we want the buttons to both disappear and for the gif to change
// as well as change the main text
yesButton.addEventListener("click", () => {
    yesButton.style.display = "none";
    noButton.style.display = "none";
    gif.src = "https://media.tenor.com/TEC6z0acIbUAAAAj/cute-bears-love.gif";
    mainText.textContent = "yay! i knew you would say yes! <3";
});