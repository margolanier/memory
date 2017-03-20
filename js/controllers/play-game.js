module.exports = {
	name: 'PlayGame',
	func($scope, CardDeck, GameStats) {
		
		// start new game on load
		$scope.newGame = () => {
			$scope.cards = CardDeck.newGame();
			$scope.game = GameStats.newStats($scope.cards);
		};
		$scope.newGame();
		
		
		// change theme of card deck, optional
		$scope.setTheme = (theme) => {
			$scope.cards = CardDeck.setTheme(theme);
		};
		
		// track user guesses each round
		let guesses = 0;
		let firstGuess = null;
		let secondGuess = null;
		
		const resetGuesses = () => {
			guesses = 0;
			firstGuess = null;
			secondGuess = null;
		};
		
		
		/*
		 * On each card flip, record guess and determine if match
		 */
		$scope.selectCard = (card) => {
			CardDeck.flipCard(card.id, true); // flip card over when selected
			
			/*
			 * If 2 cards have been flipped: check if it's a match
			 *
			 * 1. Compare cards
			 * 2. Update game stats
			 * 3. Reset round
			 */
			let isMatch = (first, second) => {
				if (first.name === second.name) {
					console.log(`it's a match!`);
					// disable cards
					CardDeck.disableCard(first.id);
					CardDeck.disableCard(second.id);
					
					// update user score
					
					
					if($scope.cards.active === 0) {
						console.log('win');
					}
					
				} else {
					// flip cards back over
					const noMatch = () => {
						CardDeck.flipCard(first.id, false);
						CardDeck.flipCard(second.id, false);
					};
					setTimeout(function() {
						noMatch();
					}, 500);
				}
				
				// reset round for next turn
				GameStats.updateRound();
				resetGuesses();
			};
			
			
			// next action is determined by how many cards the user has already selected
			switch (guesses) {
				
				// on first guess, leave card flipped
				case 0:
					console.log(card.name);
					guesses++;
					firstGuess = card;
					break;
				
				// on second guess, check cards for a match
				case 1:
					// prevent double-clicking on same card
					console.log(card.name);
					if (card.id !== firstGuess.id) {
						guesses++;
						secondGuess = card;
						
						isMatch(firstGuess, secondGuess);
					}
					break;
				
				default:
					guesses = 0;
			}
			
		};
	}
};