import { Component, OnInit } from '@angular/core';
import { ApiCallService } from '../../services/api-call.service';
import { CommonModule } from '@angular/common';
import { MatchCardComponent } from '../../components/match-card/match-card.component';


@Component({
  selector: 'app-livescore',
  standalone: true,
  imports: [CommonModule, MatchCardComponent],
  templateUrl: './livescore.component.html',
  styleUrl: './livescore.component.css'
})
export class LivescoreComponent implements OnInit {

  liveMatches:any
match: any;
  constructor(private _api:ApiCallService){

  }
  ngOnInit(): void {
    this.loadLiveMatches();
  }

  private loadLiveMatches() {
    this._api.getLiveMatches().subscribe({
      next: data => {
        console.log(data);
        this.liveMatches= data
      },
      error: error => {
        console.log(error);
      }
    });
  }
}
