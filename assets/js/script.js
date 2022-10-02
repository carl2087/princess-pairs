// Wait for the Dom to finish loading before starting the game

document.addEventListener("DOMContentLoaded", function() {
    startGame();
});

// Global variable for number of cards
const numOfCards = 18;


function startGame(){

    // create an array for the random cards

    let randomArray = [];
    while (randomArray.length < numOfCards) {
        let number = Math.floor(Math.random() * numOfCards);
        if (randomArray.includes(number) === false) {
            randomArray.push(number);
        }
    } 

    // Use the randomArray to create an array of the cards in a random order

    let cards = document.getElementsByClassName("card-front");
    if (cards.length !== numOfCards) {
        throw `Wrong number of cards. Abort!`
    } 

    let randomCards = [];
    for (let i = 0; i < numOfCards; i++) {
        randomCards.push(cards[randomArray[i]]);
    }

    // Creates HTML code for the random array of card images

    for (let randomCard of randomCards) {
        let cardSource = randomCard.getAttribute("src");
        let cardDescription = randomCard.getAttribute("alt");
        let cardData = randomCard.getAttribute("data-type");
        let image = document.createElement("img");
        image.setAttribute("src", cardSource);
        image.setAttribute("alt", cardDescription);
        image.setAttribute("data-type", cardData)
        image.className = "card-back hidden";
        let cardGame = document.getElementsByClassName("random-card-area");
        cardGame[0].appendChild(image);
    }

}

    // Enables you to click the images and turn them over










    



    // Checks if cards that have been clicked match






