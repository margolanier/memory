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
		
		function Card(id, name, image) {
			this.id = id;
			this.name = name;
			this.image = image;
			this.flipped = false;
			this.active = true;
			
			return this;
		}
		
		return {
			setTheme(theme) {
				let cards = GoT; // hardcoded for now
				// let cards = theme;
				let count = 0;
				
				let addCardsToDeck = () => {
					cards.forEach(function(card) {
						let newCard = new Card(count, card.name, card.image);
						cardDeck.push(newCard);
						count++;
					});
				};
				
				// loop through cards twice when adding to deck, so each has a match
				for (let i=0; i<2; i++) {
					addCardsToDeck();
				}
				return cardDeck;
			},
			
			getCards() {
				return cardDeck;
			},
			
			shuffle() {
				return shuffle(cardDeck);
			},
			
			flipCard(id, side) {
				// id matches array index
				cardDeck[id].flipped = side;
				return cardDeck;
			},
			
			disableCard(id) {
				// id matches array index
				cardDeck[id].active = false;
				return cardDeck;
			},
			
		};
	},
};