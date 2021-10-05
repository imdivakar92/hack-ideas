import { Component, OnInit } from '@angular/core';
import { Challenge } from 'src/app/models/Challenge';
import { Vote } from 'src/app/models/Vote';
import { ChallengeService } from 'src/app/services/challenge.service';
import { EmployeeService } from 'src/app/services/employee.service';
import { TagService } from 'src/app/services/tag.service';
import { VoteService } from 'src/app/services/vote.service';

@Component({
  selector: 'app-challenge',
  templateUrl: './challenge.component.html',
  styleUrls: ['./challenge.component.scss']
})
export class ChallengeComponent implements OnInit {

  public challengeList: Challenge[] = [];
  public voteList: Vote[] = [];
  public challenge: Challenge = {
    id: 0,
    title: '',
    description: '',
    tags: [],
    createdBy: 0,
    createdDate: new Date()
  };
  public editIndex = 0;

  constructor(
    private challengeService: ChallengeService,
    private tagService: TagService,
    private employeeService: EmployeeService,
    public voteService: VoteService
  ) { }

  ngOnInit(): void {
    this.challengeList = this.challengeService.getChallenge();
    this.voteList = this.voteService.getVote();
  }

  createChallenge(): void {
    this.challenge.id = this.challengeList.length;
    this.challenge.createdBy = this.employeeService.activeEmployeeId();
    this.challenge.createdDate = new Date;
    (!this.editIndex) ? this.challengeService.createChallenge(this.challenge) : this.updateChallenge();
    this.refreshEmployeeScope();
  }

  updateChallenge(): void {
    this.challengeService.updateChallenge(this.challenge, this.editIndex);
    this.refreshEmployeeScope();
  }

  removeChallenge(index: number): void {
    this.challengeService.removeChallenge(index);
  }

  editChallenge(index: number): void {
    this.challenge = this.challengeList[index];
    this.editIndex = index;
  }

  toggleVote(challengeId: number): void {
    const vote: Vote = {
      id: this.voteList.length,
      challengeId,
      votedBy: this.employeeService.activeEmployeeId(),
      createdDate: new Date()
    }
    this.voteService.toggleVote(vote);
  }

  refreshEmployeeScope(): void {
    this.challenge = {
      id: 0,
      title: '',
      description: '',
      tags: [],
      createdBy: this.employeeService.activeEmployeeId(),
      createdDate: new Date()
    };
    this.editIndex = 0;
  }

}
