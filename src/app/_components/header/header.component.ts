import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/_services/common.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public filterValue: string;

  constructor(private commonService: CommonService) { }

  ngOnInit(): void {
  }

  // public debounce(e) {
  //   let timer;
  //   clearTimeout(timer);
  //   timer = setTimeout(() => {
  //     this.filterRecipe(e)
  //   }, 300);
  // }

  public filterRecipe(e) {
    this.commonService.setFilterValue(this.filterValue);
  }

}
