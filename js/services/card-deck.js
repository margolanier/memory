module.exports = {
	name: 'CardDeck',
	func($http) {
		
		// define current deck of cards
		let cardDeck;
		
		// import custom themes
		const themes = {
			GoT: require ('./GoT-theme'),
		};
		
		// set default theme
		let theme = themes['GoT'];
		
		let shuffle = (array) => {
			let currentIndex = array.length, temporaryValue, randomIndex;
			
			// while there remain elements to shuffle...
			while (0 !== currentIndex) {
				// pick a remaining element...
				randomIndex = Math.floor(Math.random() * currentIndex);
				currentIndex -= 1;
				
				// swap it with the current element
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
			setTheme(newTheme) {
				theme = themes[newTheme];
				return theme;
			},
			
			newGame() {
				cardDeck = [];
				let cards = [];
				
				// get theme and corresponding card list
				let unshuffled = theme;
				
				// duplicate cards list, so each card has a match
				for (let i=0; i<2; i++) {
					unshuffled.forEach(function(card) {
						cards.push(card);
					});
				};
				
				// shuffle list before adding new cards to deck
				cards = shuffle(cards);
				
				// loop through shuffled array and create new cards from Card constructor
				// count/id === array index
				let count = 0;
				cards.forEach(function(card) {
					let newCard = new Card(count, card.name, card.image);
					cardDeck.push(newCard);
					count++;
				});
				
				return cardDeck;
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