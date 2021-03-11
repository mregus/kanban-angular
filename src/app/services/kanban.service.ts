import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { KanbanCard } from '../kanban-card/kanban-card';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class KanbanService {

  private baseUrl = 'http://localhost:8080/api/kanban';

  constructor(private httpClient: HttpClient) { }

  getCardList(): Observable<KanbanCard[]> {
    return this.httpClient.get<GetResponse>(this.baseUrl).pipe(
      map(response => {
        console.log("response", response._embedded.kanbans)
        return response._embedded.kanbans
      })
    );
  }

    addToKanban(tempCard){
      var card = new KanbanCard(tempCard, new Date().getTime().toString(), "John Doe", "backlog")
      return this.httpClient.post(this.baseUrl, card).pipe(
          map(response =>{
          console.log (response);
        })
      )
  }
}

interface GetResponse {
  _embedded: {
    kanbans: KanbanCard[];
  }
}
