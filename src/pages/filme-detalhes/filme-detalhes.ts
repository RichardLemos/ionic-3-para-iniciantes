import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MovieProvider } from '../../providers/movie/movie';

@IonicPage()
@Component({
  selector: 'page-filme-detalhes',
  templateUrl: 'filme-detalhes.html',
  providers: [MovieProvider]
})
export class FilmeDetalhesPage {
  public filme;
  public filmeid;

  constructor(
    public navCtrl: NavController,
     public navParams: NavParams,
    public movieProvider: MovieProvider) {
  }

  ionViewDidEnter() {
    this.filmeid = this.navParams.get("id");
    this.movieProvider.getMovieDetails(this.filmeid).subscribe(filme => {
      this.filme = filme;
      console.log(this.filme);
    }, error =>{
      console.log(error);
    })
  }

}
