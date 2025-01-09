import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SchwabTokensService {
  
  stuff() {
    console.log(environment.API_KEY)
  }

  constructor() { }
}
