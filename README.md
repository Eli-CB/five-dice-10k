# Five Dice 10,000 

A game with similar rules to [Farkle](https://en.wikipedia.org/wiki/Farkle "Farkle")
 or [Dice 10,000](https://en.wikipedia.org/wiki/Dice_10000 "Dice 10,000"), only played with 5 dice and a steal roll rule. Players are given the chance to add on to a roll that the last player passed on (not supported in single player mode). A more detailed rules list can be found under *Rules and Scoring* below.

## Running the Application

In order to run the application locally, please follow the following instructions:

1. `git clone` the repository
2. `cd` into the `five-dice-10k` directory
3. run `npm install`
4. run `npm start`
5. wait for your browser to open or nagivate to `localhost:3000`

### List of Known Bugs:
- No ability to roll less than 5 dice
- Turn score not updated with rolls 
- Finishing over 10,000 does not keep score properly

# Rules and Scoring
### Single Player Rules:
Try to reach **exactly 10,000 points** in as **few turns as possible**.
As long as you keep scoring over 0 after any number of dice are rolled, you may continue your turn. If all five dice are used to score points, you may roll all five again.
Add points to your total by finishing your turn, done by pressing the end turn button. Rolling a 0 will automatically end your turn and re-roll for you.

### Scoring:
- 1's and 5's are worth 100 and 50 respectively.
- Any three-of-a-kind is worth 100 multiplied by the number (ie. three 6's is worth 600).
- Any four-of-a-kind is worth double the three-of-a-kind, and so on for five-of-a-kind.
- A full house (three-of-a-kind plus a pair) is worth the three-of-a-kind value plus the pair's number times 100.
- A small straight comprising 4 dice is worth 250, a large straight comprising all 5 is worth 500

This roll:
**1 - 3 - 2 - 2 - 2** would be worth 300 points. Three-of-a-kind 2's is 200 plus the 1 worth 100 makes 300. In this case the 3 is not worth any points.