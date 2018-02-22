/* 5. Create a function roundResult() */

// function roundResult(cardsOnTable) {
//     let cardsSorted = [],
//         highestCard;
//     for (let card in cardsOnTable) {
//         cardsSorted.push(card, card.weight);
//     }
//     cardsSorted.sort((a, b) => {
//         return a[1] - b[1]
//     })
//     highestCard = cardsSorted[cardsOnTable.length - 1]; // highest card
//     console.log(highestCard)
//     switch (cardsOnTable.indexOf(highestCard)) {
//         case 1: // if single occurence of highest card
//             cardsOnTable.forEach((card) => { // reassigning the player number to the player key of card the lost player receives
//                 card.player = cardsSorted[highestCard].player;
//             })
//             players[highestCard.player - 1].hand.unshift(cardsOnTable) // add the cards to the bottom of the array
//             break;
//         default:
//             break;
//     }
// }

/* 6. Simulate a blind game */

// function blindGame() {
//     let cardsOnTable = new Array(),
//         amounts = [];
//     while (amounts.indexOf(0) < 1) { // Create a while loop looping while all players have more than 0 cards
//         for (let player in players) {
//             amounts.push(players[player].hand.length); // push the lenghts
//         }
//         switch (amounts) {
//             case amounts.indexOf(0):
//                 // return winner
//                 console.log(players[amounts.indexOf(0)] + " won!") // the index in the amounts array is the same as the player
//                 break;
//             default:
// 			for(let player in players){
// 				cardsOnTable.push(players[player].hand[0]);
// 				players[player].hand.shift();
// 			}
//             roundResult(cardsOnTable)
//             break;
//         }
//     }
// }
