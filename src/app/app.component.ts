import { Component, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as xml2js from 'xml2js';
import { switchMap } from 'rxjs/operators';
import { DataTransferService } from 'src/app/Services/data-transfer.service';
import { plainToClass } from "class-transformer";
import { UserInfo } from 'src/app/ModelClasses/Model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'personalPortfolio';
  /**
   *
   */
  constructor(private http: HttpClient,
    public dataService: DataTransferService) {
    this.loadXML().subscribe(x => {
      this.dataService.userInfo = plainToClass(UserInfo, x.userInfo);
      console.log(this.dataService.userInfo);
    });
  }

  loadXML() {
    return this.http
      .get("/assets/UserInformation.xml", { responseType: "text" })
      .pipe(
        switchMap(async xml => await this.parseXmlToJson(xml))
      );
  }

  async parseXmlToJson(xml: any) {
    return await xml2js
      .parseStringPromise(xml, { explicitArray: false })
      .then(response => response);
  }

}
