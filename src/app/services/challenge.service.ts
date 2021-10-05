import { Injectable } from '@angular/core';
import { Challenge } from '../models/Challenge';
import { DataService } from './data.service';
import { EmployeeService } from './employee.service';

@Injectable({
  providedIn: 'root'
})
export class ChallengeService {

  challengeData: Challenge[] = [];

  constructor(
    private dataService: DataService,
    private employeeService: EmployeeService
  ) {
    this.challengeData = this.dataService.getDataFromStorage().challenge;
  }

  public createChallenge(challenge: Challenge): void {
    this.challengeData.push(challenge);
    this.dataService.constructData(this.challengeData, 'challenge');
  }

  public removeChallenge(index: number): void {
    this.challengeData.splice(index,1);
    this.dataService.constructData(this.challengeData, 'challenge');
  }

  public updateChallenge(challenge: Challenge, index: number): void {
    this.challengeData[index] = challenge;
    this.dataService.constructData(this.challengeData, 'challenge');
  }

  public displayActionItems(challengeCreatedById: number): boolean {
    return challengeCreatedById === this.employeeService.activeEmployeeId();
  }

  public getChallenge(): Challenge[] {
    return this.challengeData;
  }
}
