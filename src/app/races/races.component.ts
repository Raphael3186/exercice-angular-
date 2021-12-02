import { Component, OnInit } from '@angular/core';
import { RaceModel } from '../model/race.model';

import { RaceService } from '../race.service';

@Component({
  selector: 'pr-races',
  templateUrl: './races.component.html',
  styleUrls: ['./races.component.css']
})
export class RacesComponent implements OnInit {
  races: Array<RaceModel> = [];
  constructor(public raceService: RaceService) {}

  ngOnInit(): void {
    this.races = this.raceService.list();
  }
}
