import { Constants } from '../../core/constants';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Content } from 'src/app/models/content';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  constructor(
    private _httpClient: HttpClient
  ) { }

  getAllContents(): Observable<any> {
    return this._httpClient.get(Constants.apiRoot + 'content');
  }

  createContent(content: Content): Observable<any> {
    return this._httpClient.post<any>(Constants.apiRoot + 'content/create', content)
  }
}
