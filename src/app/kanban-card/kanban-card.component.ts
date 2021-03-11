import { Component, OnInit } from '@angular/core';
import { KanbanService } from '../services/kanban.service';
import { KanbanCard } from './kanban-card';

@Component({
  selector: 'app-kanban-card',
  templateUrl: './kanban-card.component.html',
  styleUrls: ['./kanban-card.component.css']
})
export class KanbanCardComponent implements OnInit {

  cards: KanbanCard[];
  isButtonVisible = true;

  constructor(private kanbanService: KanbanService) { }

  ngOnInit(): void {
    this.listCards();
  }

  listCards(){
    this.kanbanService.getCardList().subscribe(
      data => {
        this.cards = data
      }
    )
  }

  addToKanban(tempCard){
    this.kanbanService.addToKanban(tempCard).subscribe(
      data => {
        console.log("data", data);
      }
    );
  }

}
