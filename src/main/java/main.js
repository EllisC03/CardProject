//This code is written by Ellis Contessa, it was started in January 2021 as part of a non-exam assessment. It should do the following:
// Allows two players to enter their details, which are then authenticated, to ensure that they are authorised players.
// 2. Shuffles the 30 cards in the deck.
// 3. Allows each player to take a card from the top of the deck. Play continues until there are no cards left in the deck.
// 4. Calculates the winner and allocates both cards to the winner.
// 5. Displays which player wins (the player with the most cards).
// 6. Lists all of the cards held by the winning player.
// 7. Stores the name and quantity of cards of the winning player in an external file.
// 8. Displays the name and quantity of cards of the 5 players with the highest quantity of cards from the external file.


//DECK SHUFFLE - First the deck of 30 cards is created using the cardDeck array. A for loop that will be iterated 100,000 times is initiated, in it a random number between 1 and 100 is generated.
// The variable j is used to tell the program where we are in the deck when shuffling, it iterates through the 30 elements until the for loop has finished all 100,000 loops.
//if the random number assigned to variable random is greater or equal to 50, than the current card in index j is swapped with the card behind it.
//it then prints out the shuffled deck to the console.

let cardDeck = ["red1", "red2", "red3", "red4", "red5", "red6", "red7", "red8", "red9", "red10", "yellow1", "yellow2", "yellow3", "yellow4", "yellow5", "yellow6", "yellow7", "yellow8", "yellow9", "yellow10", "black1", "black2", "black3", "black4", "black5", "black6", "black7", "black8", "black9", "black10"];
let j = 0;
for(let i=0; i < 100000; i++) {
    let random = Math.floor(Math.random() * 100);
    if(j >= 29) {
        j = 0
    }
    j++
    if (random >= 50) {
        let swap = cardDeck[j - 1]
        cardDeck[j - 1] = cardDeck[j]
        cardDeck[j] = swap
    }
}

console.log( "The shuffled deck: " + cardDeck);


//COMPARING CARDS

//These 2 variables and 2 arrays are used to hold the players information, player1Score and player2Score hold the number of wins each player has in the current game
//player1Deck and player2Deck hold the cards each player has won during their rounds so far.

let player1Score = 0;
let player2Score = 0;
let player1Deck = [30];
let player2Deck = [30];

// A loop is started so that the algorithm checks each set of players cards. Player1 = cardDeck[i] and Player2 = cardDeck[i + 1] are essentially the two players drawing the top two cards of the deck.
//player1Check = Player1.substring(0, 1) and player2Check = Player2.substring(0, 1) is used so that the algorithm knows what colour the players card is by taking the first letter of the card the player has drawn.

for (let i=0; i<30; i = i + 2) {
    let Player1 = cardDeck[i];
    let Player2 = cardDeck[i + 1];
    let player1Check = Player1.substring(0, 1)
    let player2Check = Player2.substring(0, 1)
    let player1NumberCheck = 0;
    let player2NumberCheck = 0;

    //here the player1check variable we have created with the first letter of the players card is used to check what the number of the card is.
    //if the card is red, than the number is in index 3
    //if the card is yellow, than the number is in index 6
    //if the card is black, than the number is in index 5
    //This means that if the colours are drawn the program is able to figure card has the higher number using the variable player1NumberCheck.

    if(player1Check == "r") {
        player1NumberCheck = Player1.substring(3, 4)
    }
    else if (player1Check == "y") {
        player1NumberCheck = Player1.substring(6, 7)
    }
    else if (player1Check == "b") {
        player1NumberCheck = Player1.substring(5, 6)
    }

    //This is the way the algorithm compares the cards. Whichever colour card they have, it runs that specific if statement.
    //Using player2Check == "r" as an example, first the player2NumberCheck variable stores the number of the card, in case it has to be used.
    //Next, if player1Check == "y", then player1Score is increased by 1 for winning the round, it prints to the console that they have won and it stores the winning cards in their decks.
    //it then does that same thing but if player1Check == "b". This process is repeated for all the colours of cards that player2Check can be.
    //player2Check is then compared to all the possibility that aren't the same colour, because then it is determined by number.
    //Therefore, at the end, if any of the players cards are the same colour, player1NumberCheck and player2NumberCheck are compared to see which card has the highest number.

    if(player2Check == "r") {
        player2NumberCheck = Player2.substring(3, 4)
        if(player1Check == "y") {
            player1Score++
            console.log("player 1 wins")
            player1Deck[i] = Player1
            player1Deck[i + 1] = Player2
        }
        else if (player1Check == "b") {
            player2Score ++
            console.log("player 2 wins")
            player2Deck[i] = Player1
            player2Deck[i + 1] = Player2
        }
    }
    else if (player2Check == "y") {
        player2NumberCheck = Player2.substring(6, 7)
        if(player1Check == "r") {
            player2Score++
            console.log("player 2 wins")
            player2Deck[i] = Player1
            player2Deck[i + 1] = Player2
        }
        else if (player1Check == "b") {
            player1Score++
            console.log("player 1 wins")
            player1Deck[i] = Player1
            player1Deck[i + 1] = Player2
        }
    }
    else if (player2Check == "b") {
        player2NumberCheck = Player2.substring(5, 6)
        if(player1Check == "y") {
            player2Score++
            console.log("player 2 wins")
            player2Deck[i] = Player1
            player2Deck[i + 1] = Player2
        }
        else if (player1Check == "r") {
            player1Score ++
            console.log("player 1 wins")
            player1Deck[i] = Player1
            player1Deck[i + 1] = Player2
        }
    }
    if (player1Check == "r" && player2Check == "r" || player1Check == "y" && player2Check == "y" || player1Check == "b" && player2Check == "b") {
        if (player1NumberCheck > player2NumberCheck) {
            player1Score++
            console.log("player 1 wins")
            player1Deck[i] = Player1
            player1Deck[i + 1] = Player2
        }
        else if (player1NumberCheck < player2NumberCheck) {
            player2Score++
            console.log("player 2 wins")
            player2Deck[i] = Player1
            player2Deck[i + 1] = Player2
        }
    }
    console.log(player1Score)
    console.log(player2Score)
    console.log(player1Deck)
    console.log(player2Deck)

}
