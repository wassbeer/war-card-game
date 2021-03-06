# Game of War Algorithm

Assessment for 216, coding a war card game algorithm

### The deck

1. Create the card deck
1.1 Array with cardSorts
1.2 Array with cardWeights
1.3 Empty array deck
1.4 Constructor function card
1.4.1 Key weight
1.4.2 Key sort
1.4.3 Key player (not assigned yet)
1.5 function createDeck(cardsorts, cardWeights)
1.5.1 for each sort in cardSorts
1.5.2 for each weight in cardWeights
1.5.3 push a new card to cards

### The shuffle

2. Create a random function --> See reference on what is random
2.1 the function takes in the parameters deck and the index
2.2 the function returns a random number between the index and the length of the deck - 1
2.3 Use Math.floor() and Math.random()

3. Create card shuffle function
3.1 the function takes in the deck as a parameter
3.2 start a for loop over the deck
3.3 call random function
3.4 javascript swap of cards index card with random card // b = [a, a = b][0];
3.5 Index number 51

### The Distribution

4. Distribute the cards
4.2 Declare empty array players;
4.3 Create a player Constructor
4.3.1 key number
4.3.2 key hand
4.4 Create distribute function
4.4.1 Taking in the n of players and deck
4.4.2 The index should equal a number that is divisible to 1 by the n players (%)
4.4.3 the cards should be tagged with the number of the player
4.5 For each player (playerNumber), assign the hand and number
4.6.1 Use slice array to assign the cards to the players
4.6.2 Use splice to delete the assigned part

### The war game

5. Create a function playRound()
5.1 the function takes in the players and the rematchStack
5.2 create arrays cardsOnTable and loserCards;
5.3 throw cards on table
5.4 determine the highest card(s)
5.4.1 one loser
5.4.1.1 reassign the player number to the player key of card the lost player receives in stack
5.4.1.2 push the cards to the BOTTOM of the cards of the particular player who has lost his/her array
5.5 multiple losers
5.5.2 Push the highest cards to the rematchStach 
5.5.3 Push the losing players to the rematchPlayers array
5.5.4 Take care of special cases
5.5.4.1 One player has no cards left
5.5.4.2 Multiple players played their last card
5.5.3 Call the playRound function with rematchStach as argument

6. Simulate a blind game
6.1 Declare variables noWinner (boolean) and winners(array); 
6.2 Create a while loop looping while all players have more than 0 cards
6.2.2 call playRound()
6.3 determine the winner 
6.3.1 determine which players' array.length equals 0
6.3.2 log the winner(s)

### Background info: Fisher Yates Shuffle 

When swapping 'truly' random cards every iteration, the outcomes do not occur in equal frequencies. Thus, the algorithm would not be really random. A solution for this problem is making use of the Fisher Yates Shuffle (not provided as native method to JS, contrary to Python)

__logic__: every iteration the iterated card can swap with a card index that is not iterated yet
__logic__: the scope of the random card swap selection decreases every iteration

let array = ['A', 'B', 'C'];

randomizeFisherYatesFunction(array);

_1st iteration_

ABC --> BAC <!-- swap A with B -->
ABC --> CBA <!-- swap A with C -->
ABC --> ABC <!-- No change -->

_2nd iteration (only randomizing index numbers 2 and 3)_

BAC --> BCA <!-- Swap C with A -->
BAC --> BAC <!-- No change -->

CBA --> CAB <!-- Swap B with A -->
CBA --> CBA <!-- No change -->

ABC --> ACB <!-- Swap B with C -->
ABC --> ABC <!-- No change -->

_3rd iteration all remains the same_

### for...in vs. for(let i = 0; i < n; i++) vs. forEach()

_"Because the order of iteration is implementation-dependent, iterating over an array may not visit elements in a consistent order. Therefore it is better to use a for loop with a numeric index (or Array.prototype.forEach() or the for...of loop) when iterating over arrays where the order of access is important." -MDN_

The "for...in" statement is used when the order of iteration is not important. For loops are used when the order of iteration is important, for instance in the shuffle() function, or when the object has no properties yet.

### Reference

* [Single responsibility principle](https://en.wikipedia.org/wiki/Single_responsibility_principle)
* [The Kunth-Fisher-Yates Algorithm](http://www.i-programmer.info/programming/theory/2744-how-not-to-shuffle-the-kunth-fisher-yates-algorithm.html)
* [War Card Game  Algorithm](https://u.osu.edu/fe1181au17sec6689j/files/2016/10/War-Final-Algorithm-rumt5g.pdf)
* [How Python Random Shuffle Works](https://softwareengineering.stackexchange.com/questions/215737/how-python-random-shuffle-works)
* [How to Swap Two Variables in JavaScript](https://stackoverflow.com/questions/16201656/how-to-swap-two-variables-in-javascript)
* [for...in](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in)

