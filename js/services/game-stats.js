module.exports = {
	name: 'GameStats',
	func($http) {
		let stats = {
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
			getStats() {
				//return stats;
				return 'stats';
			},
			
			addMatch(player) {
				stats[player].matches += 1;
				stats.activeCards -= 2; // card pairs are disabled after a match
				return stats;
			},
			
			updateRound() {
				stats.round += 1;
				return stats;
				
				// check for number of active cards
			},
		};
	},
};