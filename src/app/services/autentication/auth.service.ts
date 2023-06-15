import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {environment} from "../../../environments/environment";
import {BehaviorSubject, map, Observable} from "rxjs";
import {TokenUser} from "../../model/token-user.model";

const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json" })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private tokenUserSubject: BehaviorSubject<TokenUser | null>;
  public tokenUser: Observable<TokenUser | null>;

  authUrl: string;
  constructor(
    public http: HttpClient
  ) {
    this.authUrl = `${environment.apiUrl}/api/v1/auth`;
    this.tokenUserSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('tokenUser')!));
    this.tokenUser = this.tokenUserSubject.asObservable();
  }

  public get userValue() {
    return this.tokenUserSubject.value;
  }

  signup(signup: any): Observable<any> {
    return this.http.post<any>(`${this.authUrl}/signup`, signup, httpOptions)
      .pipe(map(tokenUser => {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        localStorage.setItem('user', JSON.stringify(tokenUser));
        this.tokenUserSubject.next(tokenUser);
        return tokenUser;
      }));
  }

  signin(signin: any): Observable<any> {
    return this.http.post<any>(`${this.authUrl}/signin`, signin, httpOptions)
      .pipe(map(tokenUser => {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        localStorage.setItem('user', JSON.stringify(tokenUser));
        this.tokenUserSubject.next(tokenUser);
        return tokenUser;
      }));
  }
}
