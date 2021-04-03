import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataTransferService } from 'src/app/Services/data-transfer.service';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.scss']
})
export class DashBoardComponent implements OnInit {

  constructor(public dataService: DataTransferService,
    private router: Router) {
    switch (this.router.url) {
      case '/dashboard/personalinfo':
        this.activeLink = 'personal';
        break;
      case '/dashboard/professionalinfo':
        this.activeLink = 'professional';
        break;
      case '/dashboard/contactInfo':
        this.activeLink = 'contact';
        break;
      case '/dashboard/resume':
        this.activeLink = 'resume';
        break;
      case '/dashboard':
        this.activeLink = 'personal';
        break;
      default:
        break;
    }
  }
  activeLink: string = '';

  ngOnInit(): void {
  }

  isActive(link: string) {
    return this.activeLink.toLocaleLowerCase() === link.toLowerCase();
  }

  setActive(active: string) {
    this.activeLink = active;
  }



}
