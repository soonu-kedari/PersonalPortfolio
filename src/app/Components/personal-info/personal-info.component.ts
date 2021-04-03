import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DataTransferService } from 'src/app/Services/data-transfer.service';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PersonalInfoComponent implements OnInit {

  constructor(public dataService: DataTransferService) { }

  ngOnInit(): void {
  }

}
