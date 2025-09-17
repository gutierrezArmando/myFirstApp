import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-darsh-board-child',
  standalone: true,
  imports: [],
  templateUrl: './darsh-board-child.component.html',
  styleUrl: './darsh-board-child.component.css'
})
export class DarshBoardChildComponent {

  @Input() personaChild:any;
}
