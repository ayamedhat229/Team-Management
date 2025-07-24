import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TableService {

  constructor(private _HttpClient:HttpClient) { }
  getAllTableData():Observable<any>{
    return this._HttpClient.get('/assets/data/db.json');
  }
}
