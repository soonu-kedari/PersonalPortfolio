import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as xml2js from 'xml2js';
import { switchMap } from 'rxjs/operators';
import { DataTransferService } from 'src/app/Services/data-transfer.service';
import { plainToClass } from "class-transformer";
import { UserInfo } from 'src/app/ModelClasses/Model';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomePageComponent implements OnInit {

  constructor(public dataService: DataTransferService) {
    
  }
  ngOnInit(): void {

  }
}
