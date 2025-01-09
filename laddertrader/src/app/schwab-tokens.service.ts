import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class SchwabTokensService {
  
  constructor(private http: HttpClient, private router: Router) { 

    // https://api.schwabapi.com/v1/oauth/authorize?client_id=_&redirect_uri=https://0.0.0.0
    // https://api.schwabapi.com/v1/oauth/authorize?client_id=_&redirect_uri=https://0.0.0.0
  }

  stuff() {

    const auth_url = `https://api.schwabapi.com/v1/oauth/authorize?client_id=${environment.APP_KEY}&redirect_uri=https://www.localhost:4200`
    // this.router.navigate([auth_url])

    window.location.href = auth_url;

    // console.log(environment.APP_KEY)
    // console.log(environment.SECRET)

    // this.http.get(auth_url).subscribe((val) => {
    //   console.log(val)
    // })

  }




  constructInitauthUrl() {

  }
}
