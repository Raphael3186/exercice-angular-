import { Injectable } from '@angular/core';
import { RaceModel } from './model/race.model';

@Injectable({
  providedIn: 'root'
})
export class RaceService {
  constructor() {}
  list(): Array<RaceModel> {
    return [{ name: 'Lyon' }, { name: 'London' }];
  }
}
