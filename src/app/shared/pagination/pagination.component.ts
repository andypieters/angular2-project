import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'pagination',
  templateUrl: 'pagination.component.html',
  styleUrls: ['pagination.component.css']
})
export class PaginationComponent implements OnChanges {
  @Input() items = [];
  @Input('page-size') pageSize = 10;

  pages=[];
  currentPage=1;

  @Output('page-changed') pageChanged = new EventEmitter<number>();

  constructor() { }

  ngOnChanges() {    
    let nrPages = Math.ceil(this.items.length / this.pageSize);    
    console.log(this.items.length); 
    this.pages = [];
    for(let page=1;page<=nrPages;page++){
      this.pages.push(page);
    }

    this.selectPage(1);
  }
  selectPage(page:number){
    this.currentPage=page;
    this.pageChanged.emit(page);
  }

}
