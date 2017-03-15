module.exports = {
	name: 'PlayGame',
	func($scope, CardThemes, GameStats) {
		
		$scope.cardsArray = CardThemes.getCards();
		$scope.gameStats = GameStats.getStats();
		
		console.log(`we're in!`);
	}
};