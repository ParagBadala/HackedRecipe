import { Component, OnInit, ChangeDetectorRef, AfterViewInit } from '@angular/core';
import { CommonService } from 'src/_services/common.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'HackedRecipe';
  public spinner = true;

  constructor(private commonService: CommonService) {}

  ngOnInit() {
    this.commonService.getLoading().subscribe(data => {
      this.spinner = data;
    })
  }
}
