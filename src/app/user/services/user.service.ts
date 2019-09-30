import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Constants } from "src/app/core/constants";
import { User } from "src/app/models/user";

@Injectable({
  providedIn: "root"
})
export class UserService {
  constructor(private _httpClient: HttpClient) {}

  createUser(user: User): Observable<any> {
    return this._httpClient.post<any>(Constants.apiRoot + "users", user);
  }

  deleteUser(idUser: number): Observable<any> {
    return this._httpClient.delete<any>(Constants.apiRoot + `users/${idUser}`);
  }

  getAllUsers(page: number = 1): Observable<any> {
    return this._httpClient.get<any>(Constants.apiRoot + `users?page=${page}`);
  }

  getOneUser(userId: number): Observable<any> {
    return this._httpClient.get<any>(Constants.apiRoot + `users/${userId}`);
  }

  updateUser(user: User): Observable<any> {
    return this._httpClient.put<any>(Constants.apiRoot + `users/${user.id}`, user);
  }
}
