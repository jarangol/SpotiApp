import { Component} from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent {
  
  newReleases: any[] = []
  loading: boolean;
  error: boolean;
  errorMsg: boolean;

  constructor(private spotify: SpotifyService) {
    this.error = false;
    this.loading = true; 

    this.spotify.getNewReleases()
      .subscribe((data:any) => {
        this.loading = false;
        this.newReleases = data;
      }, (err) => {
        this.loading=false;
        this.error = true;
        this.errorMsg = err.error.error.message;
        console.log(err);
      }); 
   }
}
