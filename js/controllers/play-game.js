module.exports = {
	name: 'PlayGame',
	func($scope, CardDeck, GameStats) {
		
		$scope.cards = CardDeck.getCards();
		$scope.stats = GameStats.getStats();
	}
};