module.exports = {
	name: 'GameStats',
	func($http) {
		let game = {
			playerOne: {
				matches: 0,
			},
			playerTwo: {
				matches: 0,
			},
			round: 0,
			activeCards: 12,
		};
		
		return {
			newStats(cards) {
				game.playerOne.matches = 0;
				game.playerTwo.matches = 0;
				game.round = 0;
				game.activeCards = cards.length;
				
				return game;
			},
			
			getStats() {
				return game;
			},
			
			addMatch(player) {
				game[player].matches += 1;
				game.activeCards -= 2; // card pairs are disabled after a match
				return game;
			},
			
			updateRound() {
				game.round += 1;
				return game;
				
				// check for number of active cards
			},
		};
	},
};