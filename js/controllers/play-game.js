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
		
		$scope.selectCard = (card) => {
			
			// for each guess, flip card over
			CardDeck.flipCard(card.id, true);
			
			// is it a match? compare the 2 flipped cards
			let isMatch = (first, second) => {
				if (first.name === second.name) {
					console.log(`it's a match!`);
					// disable cards
					setTimeout(function() {
						CardDeck.disableCard(first.id);
						CardDeck.disableCard(second.id);
					}, 2000);
					
					// update user score
					
				} else {
					// flip cards back over
					setTimeout(function() {
						CardDeck.flipCard(first.id, false);
						CardDeck.flipCard(second.id, false);
					}, 2000);
				}
				
				// update round
				
				// set guesses back to 0 for next turn
				guesses = 0;
			};
			
			// next action is determined by how many cards the user has already selected
			switch (guesses) {
				case 0: // first guess
					guesses++;
					console.log(guesses);
					firstGuess = card;
					break;
				case 1: // second guess
					// prevent double-clicking on same card
					if (card.id !== firstGuess.id) {
						guesses++;
						console.log(guesses);
						secondGuess = card;
						
						// check cards for a match
						isMatch(firstGuess, secondGuess);
					}
					break;
				default:
					guesses = 0;
			}
			
		};
	}
};