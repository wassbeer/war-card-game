/* 1. Create the card deck */

const cardSorts = ['♦', '♣', '♥', '♠'], // 20 = P, 30 = L, 40 = K, 50 = A
    cardWeights = [2, 3, 4, 5, 6, 7, 8, 9, 10, 20, 30, 40, 50],
    deck = new Array();

function Card(sort, weight, player) {
    this.sort = sort,
        this.weight = weight,
        this.player = player;
}

function createDeck(sorts, weights) {
    sorts.forEach((sort) => {
        weights.forEach((weight) => {
            deck.push(new Card(sort, weight, null));
        });
    });
}

/* 2. Create a random function */

function rndm(index, deck) {
    return Math.floor(Math.random() * (deck.length - index) + index);
}

/* 3. Create card shuffle function */

function shuffle(deck) {
    for (let i = 0; i < deck.length; i++) {
        const randomIndex = rndm(i, deck);
        deck[i] = [deck[randomIndex], deck[randomIndex] = deck[i]][0];
    }
}

/* 4. Create distribute function */

const players = new Array();

function Player(player, hand) {
    this.player = player,
        this.hand = hand;
}

function distribute(numberOfPlayers, deck) {
    if (52 % numberOfPlayers) {
        deck.splice(0, 1);
    };
    const handLength = deck.length / numberOfPlayers;
    let strt = -handLength;
    // distribute deck among players
    for (let i = 0; i < numberOfPlayers; i++) {
        strt += handLength;
        const hand = deck.slice(strt, strt + handLength);
        // asign the player value to the card
        for (const card in hand) {
            hand[card].player = i + 1;
        }
        players.push(new Player(i + 1, hand));
    }
}

/* 5. Create a function playRound() */

function playRound(players, secondRoundStack) {
    const cardsOnTable = new Array(),
        loserCards = new Array(),
        rematchPlayers = new Array();
        let lastCardFrequency = 0;

    // throw cards on table
    players.forEach((player) => {
        cardsOnTable.push(player.hand[0]);
        player.hand.shift();
    });

    // determine the highest card
    const highestCardWeight = Math.max(...cardsOnTable.map((o) => {
        return o.weight;
    }));

    // define the loser(s)
    cardsOnTable.forEach((card) => {
        if (card.weight === highestCardWeight) {
            loserCards.push(card);
        }
    });

    // single or multiple losers
    switch (true) {
        // multiple losers
        case (loserCards.length > 1):
            players.forEach((player) => {
                loserCards.forEach((loserCard) => {
                    // selecting the players with losing cards
                    if (loserCard.player === player.player) {
                        // if the player has no card left
                        if (!player.hand.length) {
                            lastCardFrequency++;
                            // reuse the current card
                            player.hand.push(loserCard);
                        }
                        rematchPlayers.push(player);
                    }
                });
            });
            // if multiple players have no card left so reuse cards
            if (lastCardFrequency === rematchPlayers.length) {
                return console.log('It is a tie'),
                    console.log(players);
            }
            // rematch
            const rematchStack = cardsOnTable;
            playRound(rematchPlayers, rematchStack);
            break;

        // single loser
        default:
            const stack = cardsOnTable.concat(secondRoundStack);
                let loser;
            players.forEach((player) => {
                if (loserCards[0].player === player.player) {
                    loser = player;
                }
            });
            // return tagged stack for loser
            return stack.forEach((card) => {
                card.player = loserCards[0].player;
                loser.hand.unshift(card);
            });
            break;
    }
}

/* 6. Simulate a blind game */

function blindGame(players) {
    const winners = new Array(),
        rematchStack = new Array();
    let winner = false;
    while (!winner) {
        const amounts = new Array();
        players.forEach((player) => {
            amounts.push(player.hand.length);
        });
        if (amounts.indexOf(0) > -1) {
            winner = true;
            winners.push(amounts.indexOf(0)),
                winners.forEach((index) => {
                    console.log(players);
                    console.log(`Player ${players[index].player} has won!`);
                });
            // new game
            return winner = false;
        }
        playRound(players, rematchStack);
    }
}

createDeck(cardSorts, cardWeights);
// console.log(deck);
shuffle(deck);
// console.log(deck);
distribute(4, deck);
// console.log(players[2]);
blindGame(players);
