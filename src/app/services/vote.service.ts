import { Injectable } from '@angular/core';
import { Vote } from '../models/Vote';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class VoteService {

  voteData: Vote[] = [];

  constructor(
    private dataService: DataService
  ) {
    this.voteData = this.dataService.getDataFromStorage().vote;
  }

  public toggleVote(vote: Vote): void {
    const checkVoteIndex = this.checkVote(vote);
    if(checkVoteIndex < 0) {
      this.upVote(vote);
    } else {
      this.downVote(checkVoteIndex);
    }
  }

  public getVote(): Vote[] {
    return this.voteData;
  }

  public getTotalVotesForThisChallenge(challengeId: number): number {
    return this.voteData.filter((data) => data.challengeId === challengeId).length;
  }

  private upVote(vote: Vote): void {
    this.voteData.push(vote);
    this.dataService.constructData(this.voteData, 'vote');
  }

  private downVote(voteIndex: number): void {
    this.voteData.splice(voteIndex,1);
    this.dataService.constructData(this.voteData, 'vote');
  }

  private checkVote(vote: Vote): number {
    return this.voteData.findIndex((data) => (data.challengeId === vote.challengeId && data.votedBy === vote.votedBy));
  }

}
