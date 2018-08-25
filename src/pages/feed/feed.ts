import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MovieProvider } from '../../providers/movie/movie';

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
  providers: [
    MovieProvider
  ]
})
export class FeedPage {

  public objetoFeed = {
    titulo: "Richard Oliveira",
    data: "November 5, 1955",
    descricao: "Estou criando um app incrível...",
    qtdLikes: 12,
    qtdComments: 4,
    timeComment: "11h ago"
  }

  public nomeUsuario: string = "Richard Oliveira";
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private movieProvider: MovieProvider
  ) {
  }

  public somaDoisNumeros(num1: number, num2: number): void {
    //alert(num1 + num2);
  }

  ionViewDidLoad() {
    this.movieProvider.getLatestMovies().subscribe(
      data => {
        console.log(data);
      }, error => {
        console.log(error);
      }

    )
  }

}
