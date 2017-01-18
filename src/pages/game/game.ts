import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Game } from './game.model'
import { Chalange } from './game.chalange'

@Component({
  selector: 'page-game',
  templateUrl: 'game.html'
})

export class GamePage {

  private game
  private chalangeRegularExpressionsX
  private chalangeRegularExpressionsY
  private navController
  private navParams

  constructor(
    navCtrl: NavController, 
    navParams: NavParams
    ) { 

    this.game = new Game()
    this.chalangeRegularExpressionsX = new Chalange(["/A|B/"])
    this.chalangeRegularExpressionsY = new Chalange(["/B|C/"])
    this.navController = NavController
    this.navParams = NavParams
  }

  public getGame = () => this.game

  public getChalangeExpressions = () => {
    return  {
      chalangeRegularExpressionsX: this.chalangeRegularExpressionsX,
      chalangeRegularExpressionsY: this.chalangeRegularExpressionsY
    }
  }

  public check = () => {
    let isValid = Chalange.checkRegularExpressions(
      this.game.getInputExpressions(), 
      this.chalangeRegularExpressionsX.getChalangeRegularExpressions(), 
      this.chalangeRegularExpressionsY.getChalangeRegularExpressions()
      )

    this.game.setValidity(isValid) 
  }
}