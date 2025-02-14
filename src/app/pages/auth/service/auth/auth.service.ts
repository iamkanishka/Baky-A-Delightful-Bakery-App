import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  constructor(private http: HttpClient) {}

  getGoogleSignInUserDetails(accessToken:string): Observable<any> {
    return this.http.get("https://www.googleapis.com/oauth2/v3/userinfo?access_token=" + accessToken);
   }
}
