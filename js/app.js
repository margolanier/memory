const app = angular.module('MemoryGame', []);

const controllers = [
	require ('./controllers/play-game'),
];

for(let i=0; i<controllers.length; i++) {
	app.controller(controllers[i].name, controllers[i].func);
}

const services = [
	require ('./services/card-themes'),
	require ('./services/game-stats'),
];

for(let i=0; i<services.length; i++) {
	app.factory(services[i].name, services[i].func);
}