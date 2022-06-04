import { Component, OnInit } from '@angular/core';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit {

  games: any;
  gameService: GameService;

  constructor(gameService: GameService) {
    this.gameService = gameService;
  }

  ngOnInit(): void {
    this.getGames();
  }

  getGames(): void{
    this.games = this.gameService.getGame().subscribe((data =>
        {
          this.games = data;
          console.log(this.games)
        }
      ))
  }

}
