import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {map, Observable} from "rxjs";
import {Users} from "../models/users";

@Injectable({
  providedIn: 'root'
})
export class LeaderboardService {

  constructor(private http: HttpClient) { }

  getLeaderboard(): Observable<Users[]> {
    return this.http.get(environment.apiUrl+'getLeaderBoard')
      .pipe(
        map((response: any) => response.leaderboard.map((user: any) => new Users().prepare(user)))
      );
  }

  addUser(username: string,time: number,success_count: number){
    this.http.post(environment.apiUrl+'addUser',{username,time,success_count}).subscribe();
  }
}
