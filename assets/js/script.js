// Wait for the Dom to finish loading before starting the game

document.addEventListener("DOMContentLoaded", function() {
    startGame();
});

// Global variables for game

let cardRevealed = [];
const numOfCards = 18;
let seeCard = function (e) {
    showCard(cardRevealed, e.currentTarget);
};


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

    cards = document.getElementsByClassName("card-back");
    for (let card of cards) {
        card.addEventListener("click", seeCard)
    }
    
}

function showCard (cardRevealed, card) {
    card.classList.remove("hidden")
    cardRevealed.push(card);

    if (cardRevealed.length === 2) {
        let cards = document.getElementsByClassName("card-back")
        for (let card of cards) {
            card.removeEventListener("click", seeCard)
        }
        checkMatch(cardRevealed);
    } else if (cardRevealed.length > 2) {
        alert ("Too many cards open!")
        throw `Too Many cards open! Abort!`
    }
        
    
}

    // Checks if cards that have been clicked match
function checkMatch (cardRevealed) {

    let firstCard = cardRevealed[0].getAttribute("data-type");
    let secondCard = cardRevealed[1].getAttribute("data-type");

    if (firstCard === secondCard) {
        console.log("correct")
    } else if (firstCard != secondCard) {
        console.log ("not a pair")
        cardRevealed[0].classList.add("hidden")
        cardRevealed[1].classList.add("hidden")
        let cards = document.getElementsByClassName("card-back")
        for (let card of cards) {
            card.addEventListener("click", seeCard)
        }
        cardRevealed.length = 0
    }
    
}
