import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Projects } from './projects'
@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private http: HttpClient) { }

  getProjects(){
    return this.http.get<Projects[]>('http://localhost:8085/api/projects');
  }
}
