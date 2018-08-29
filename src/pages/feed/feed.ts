import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
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

  public lista_filmes = new Array<any>();

  public nomeUsuario: string = "Richard Oliveira";
  public loader;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private movieProvider: MovieProvider,
    public loadingCtrl: LoadingController
  ) {
  }

  abreCarregando() {
    this.loader = this.loadingCtrl.create({
      content: "Carregando filmes...",
    });
    this.loader.present();
  }

  fechaCarregando() {
    this.loader.dismiss();
  }

  public somaDoisNumeros(num1: number, num2: number): void {
    //alert(num1 + num2);
  }

  ionViewDidEnter() {
    this.abreCarregando();
    this.movieProvider.getLatestMovies().subscribe(
      data => {
        // const response = (data as any);
        const objeto_retorno = (data as any);
        this.lista_filmes = objeto_retorno.results;
        console.log(objeto_retorno);
        this.fechaCarregando();
      }, error => {
        console.log(error);
        this.fechaCarregando();
      }

    )
  }

}
