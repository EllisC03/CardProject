//DECK SHUFFLE

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

let player1Score = 0;
let player2Score = 0;
let player1Deck = [30];
let player2Deck = [30];

for (let i=0; i<30; i = i + 2) {
    let Player1 = cardDeck[i];
    let Player2 = cardDeck[i + 1];
    let player1Check = Player1.substring(0, 1)
    let player2Check = Player2.substring(0, 1)
    let player1NumberCheck = 0;
    let player2NumberCheck = 0;


    if(player1Check == "r") {
        player1NumberCheck = Player1.substring(3, 4)
    }
    else if (player1Check == "y") {
        player1NumberCheck = Player1.substring(6, 7)
    }
    else if (player1Check == "b") {
        player1NumberCheck = Player1.substring(5, 6)
    }

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
