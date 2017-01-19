import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { GamePage } from '../game/game';

@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})

export class HomePage {
	private navController

	constructor(navController: NavController) {
		this.navController = navController
	}

	newGame = () => this.navController.push(GamePage)
}
