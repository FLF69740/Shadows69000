import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { HeaderItem } from '../../../core/model/header-item.model';
import { HeaderAndFooterService } from '../../../core/services/header-and-footer.service';

@Component({
  selector: 'app-main-head',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './main-head.component.html',
  styleUrl: './main-head.component.scss'
})
export class MainHeadComponent implements OnInit{

  constructor(private headerService: HeaderAndFooterService){}

  headerItem!: HeaderItem[];

  @Output() mainChoice = new EventEmitter<String>();
  

  ngOnInit(): void {
    this.headerItem = this.headerService.getHeaders();
  }

  onClickMainChoice(item: HeaderItem) {
    const idToActivate = this.headerService.onChangeMainHeader(item)
    if(idToActivate !== undefined) {
      this.mainChoice.emit(this.headerItem[idToActivate].name);
    }
  }

}
