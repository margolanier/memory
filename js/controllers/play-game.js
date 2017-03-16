module.exports = {
	name: 'PlayGame',
	func($scope, CardDeck, GameStats) {
		
		// set default theme
		$scope.cards = CardDeck.setTheme('GoT');
		
		$scope.cards = CardDeck.getCards();
		$scope.stats = GameStats.getStats();
		
		let guesses = 0;
		let firstGuess = null;
		let secondGuess = null;
		
		const resetGuesses = () => {
			guesses = 0;
			firstGuess = null;
			secondGuess = null;
		};
		
		$scope.selectCard = (card) => {
			
			// for each guess, flip card over
			CardDeck.flipCard(card.id, true);
			
			// is it a match? compare the 2 flipped cards
			let isMatch = (first, second) => {
				if (first.name === second.name) {
					console.log(`it's a match!`);
					// disable cards
					CardDeck.disableCard(first.id);
					CardDeck.disableCard(second.id);
					
					// update user score
					
				} else {
					console.log('no match');
					// flip cards back over
					CardDeck.flipCard(first.id, false);
					CardDeck.flipCard(second.id, false);
				}
				
				// update round
				
				console.log(firstGuess);
				console.log(secondGuess);
				
				// reset for next turn
				resetGuesses();
			};
			
			// next action is determined by how many cards the user has already selected
			switch (guesses) {
				case 0: // first guess
					guesses++;
					firstGuess = card;
					break;
				case 1: // second guess
					// prevent double-clicking on same card
					if (card.id !== firstGuess.id) {
						guesses++;
						secondGuess = card;
						
						// check cards for a match
						setTimeout(function() {
							isMatch(firstGuess, secondGuess);
						}, 800);
					}
					break;
				default:
					guesses = 0;
			}
			
		};
	}
};