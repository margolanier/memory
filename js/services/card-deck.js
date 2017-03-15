module.exports = {
	name: 'CardDeck',
	func($http) {
		
		// import custom themes
		const GoT = require ('./GoT-theme');
		
		// current playing cards
		let cardDeck = [];
		
		let shuffleDeck = (array) => {
			let currentIndex = array.length, temporaryValue, randomIndex;

			// while there remain elements to shuffle...
			while (0 !== currentIndex) {
				// pick a remaining element...
				randomIndex = Math.floor(Math.random() * currentIndex);
				currentIndex -= 1;
				
				// swap it with the current element.
				temporaryValue = array[currentIndex];
				array[currentIndex] = array[randomIndex];
				array[randomIndex] = temporaryValue;
			}
			
			return array;
		}
		
		function Card(name, image) {
			this.name = name;
			this.image = image;
			this.active = true;
			
			return this;
		}
		
		return {
			setTheme(theme) {
				
				return cardDeck;
			},
			
			getCards() {
				return cardDeck;
			},
			
			shuffle() {
				return shuffle(cardDeck);
			},
			
		};
	},
};