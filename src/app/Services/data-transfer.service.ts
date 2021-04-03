import { Injectable } from '@angular/core';
import { UserInfo } from '../ModelClasses/Model';

@Injectable({
  providedIn: 'root'
})
export class DataTransferService {
  public userInfo: UserInfo;
  constructor() {
    this.userInfo = new UserInfo();
  }
}
