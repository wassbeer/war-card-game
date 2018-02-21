/* 1. Create the card deck */

let cardSorts = ["♦", "♣", "♥", "♠"],
    cardWeights = [2, 3, 4, 5, 6, 7, 8, 9, 10, 20, 30, 40, 50], // 20 = B, 30 = V, 40 = K, 50 = A
    deck = new Array();

function card(sort, weight, player) {
    this.sort = sort,
        this.weight = weight,
        this.player = player
}

function createDeck(sorts, weights) {
    sorts.forEach((sort) => {
        weights.forEach((weight) => {
            deck.push(new card(sort, weight, null));
        });
    });
}

/* 2. Create a random function */

function rndm(index, deck) {
    return Math.floor(Math.random() * (deck.length - index) + index - 1);
}

/* 3. Create card shuffle function */

function shuffle(deck) {
    for (let i = 0; i < deck.length; i++) {
        let randomIndex = rndm(i, deck);
        deck[i] = [deck[randomIndex], deck[randomIndex] = deck[i]][0];
    }
}

/* 4. Create distribute function */

let players = new Array();

function player(number, hand) {
    this.number = number,
        this.hand = hand;
}

function distribute(numberOfPlayers, deck) {
    if (52 % numberOfPlayers) { deck.splice(0, 1) };
    let handLength = deck.length / numberOfPlayers;
    for (let i = 0; i < numberOfPlayers; i++) { // distribute deck among players
        let hand = deck.slice(0, handLength);
        for (let card in hand) { // asign the player value to the card
            hand[card].player = i + 1;
        }
        players.push(new player(i + 1, hand));
        deck.splice(0, handLength);
    }
}

createDeck(cardSorts, cardWeights);
console.log(deck)
shuffle(deck)
console.log(deck)
distribute(4, deck);
console.log(players[2])
