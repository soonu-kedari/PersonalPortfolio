import { Component, OnInit } from '@angular/core';
import { DataTransferService } from 'src/app/Services/data-transfer.service';

@Component({
  selector: 'app-profesional-info',
  templateUrl: './profesional-info.component.html',
  styleUrls: ['./profesional-info.component.scss']
})
export class ProfesionalInfoComponent implements OnInit {

  constructor(public dataService: DataTransferService) { }

  ngOnInit(): void {
  }

}
