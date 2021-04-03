import { Component, OnInit } from '@angular/core';
import { DataTransferService } from 'src/app/Services/data-transfer.service';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent implements OnInit {

  constructor(public dataService: DataTransferService) { }

  ngOnInit(): void {
  }

}
