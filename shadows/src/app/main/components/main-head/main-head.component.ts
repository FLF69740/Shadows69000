import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { HeaderItem } from '../../../core/model/header-item.model';
import { State } from '../../../core/services/state';

@Component({
  selector: 'app-main-head',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './main-head.component.html',
  styleUrl: './main-head.component.scss'
})
export class MainHeadComponent implements OnInit{

  headerItem!: HeaderItem[];

  @Output() mainChoice = new EventEmitter<String>();
  

  ngOnInit(): void {
    this.headerItem = [
      {
        id: 0,
        name: State.headerMainHome,
        activated: true
      },
      {
        id: 1,
        name: State.headerMainProduction,
        activated: false
      },
      {
        id: 2,
        name: State.headerMainReactions,
        activated: false
      },
      {
        id: 3,
        name: State.headerMainPlanets,
        activated: false
      },
      {
        id: 4,
        name: State.headerMainMails,
        activated: false
      },
      {
        id: 5,
        name: State.headerMainSettings,
        activated: false
      },
      {
        id: 6,
        name: State.headerMainDeconnection,
        activated: false
      }
    ];
  }

  onClickMainChoice(item: HeaderItem) {
    if (item.activated === false) {
      const idToDesactivate = this.headerItem.find((element) => element.activated === true)?.id;
      const idToActivate = this.headerItem.find((elemenet) => elemenet.name === item.name)?.id;

      if (idToDesactivate != null && idToActivate != null) {
        this.headerItemToChange(false, idToDesactivate);
        this.headerItemToChange(true, idToActivate);
        this.mainChoice.emit(this.headerItem[idToActivate].name);
      }
      
    }
    
  }

  private headerItemToChange(action: boolean, id: number) {
    this.headerItem[id].activated = action;
  }

}
