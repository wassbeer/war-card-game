// /* 5. Create a function roundResult() */

// function playRound(players, rematchStack) {
//     const cardsOnTable = new Array(),
//         loserCards = new Array();
//     // throw cards on table
//     players.forEach((player) => {
//         console.log('1. hand');
//         console.log(player.hand);
//         switch (true) {
//             case !player.hand[0]:
//                 cardsOnTable.push(rematchStack[player]);
//                 break;
//             default:
//                 cardsOnTable.push(player.hand[0]);
//                 player.hand.shift();
//                 break;
//         }
//     });
//     // determine the highest card
//     console.log(cardsOnTable);
//     const highestCardWeight = Math.max(...cardsOnTable.map((o) => {
//         return o.weight;
//     }));
//     // define the loser(s)
//     cardsOnTable.forEach((card) => {
//         if (card.weight === highestCardWeight) {
//             loserCards.push(card);
//         }
//     });
//     // determine single loser or rematch
//     switch (true) {
//         case (loserCards.length > 1):
//             rematchPlayers = new Array();
//             players.forEach((player) => {
//                 loserCards.forEach((loserCard) => {
//                     if (loserCard.player === player.player) {
//                         rematchPlayers.push(player);
//                     }
//                 });
//             });
//             rematchStack = loserCards;
//             playRound(rematchPlayers, rematchStack);
//             break;
//         default:
//             const loser = players[loserCards[0].player - 1],
//                 stack = cardsOnTable.concat(rematchStack);
//             stack.forEach((card) => {
//                 card.player = loserCards[0].player;
//                 loser.hand.unshift(card);
//             });
//             return rematchStack = new Array();
//             break;
//     }
// }

// /* 6. Simulate a blind game */

// const rematchStack = [];

// function blindGame(players) {
//     let noWinner = true;
//     const winners = new Array();
//     while (noWinner) {
//         console.log('while loop running');
//         const amounts = new Array();
//         players.forEach((player) => {
//             amounts.push(player.hand.length);
//         });
//         if (amounts.indexOf(0) > -1) {
//             noWinner = false;
//             return console.log(players),
//                 winners.push(amounts.indexOf(0)),
//                 winners.forEach((index) => {
//                     console.log(`Player ${players[index].player} has won!`);
//                 });
//         }
//         playRound(players, rematchStack);
//     }
// }

// blindGame(players);


// const dummyCards = [{ sort: '♣', weight: 50, player: 3 },
//     { sort: '♠', weight: 50, player: 3 },
//     { sort: '♦', weight: 6, player: 3 },
//     { sort: '♥', weight: 2, player: 3 },
// ];


// roundResult(dummyCards);

// /* Simulate a strategy card game */
// // 7.1 Determine the starting player 
// // 7.1.2 use the random function 
// // 7.3.1 Example strategy 1: throw anything lower than which is on the table 
// // 7.3.2 Example strategy 2: when there is a 2, 3 or 5 on the table, play higher, when higher play lower 
// // 7.4 Create a variable cardsOnTable that will contain the thrown cards 
// // 7.5 Create a while loop looping while all players have more than 0 cards 
// // 7.6 Submit the cards according to the strategy 
// // 7.7 roundResult() 
// // 7.8 determine the winner 
// // 7.8.1 determine which players ' array.length equals 0 
// // 7.8.2 log the winner