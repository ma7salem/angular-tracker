import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { task } from '../../model/task.model'
import { ProjectService } from '../../project.service'
import { Projects } from '../../projects'
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(private _projectService: ProjectService) { }
  addForm: FormGroup;
  task = new task;
  projectData = [];
  projects = [];
  tasks = [];
  ngOnInit(): void {
    this.tasks.push(this.task);
    this._projectService.getProjects().subscribe((data) => {
      this.projects = data.projects;
    })
  }

  onSubmit(){
    this.projectData.push(this.tasks);
    console.log(this.projectData);
  }
  addNewTask(){
    this.task = new task;
    this.tasks.push(this.task);
  }
  removeTask(index){
    this.tasks.splice(index);
  }

}
