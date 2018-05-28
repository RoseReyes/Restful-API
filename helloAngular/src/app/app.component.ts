import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'RestFul Tasks API';
  tasks;
  // thirdtasks; - From the first assignment which shows a specific data
  oneTasks;
  newTask: any;
  updateInfo: any;

constructor(private _httpService: HttpService){
}

ngOnInit(){
  this.newTask ={ title: "", description: ""}
  this.getTaskFromService(); //- From first assignment which show all data on-page load
}

getTaskFromService() {
  let observable = this._httpService.getTasks()
  observable.subscribe(data => {
    console.log("Got our data!", data);
    this.tasks = data;
    // this.thirdtasks = data[2]; - From first assignment which shows a specific data 
  })
}

getOneTaskFromService(id) {
  let observable = this._httpService.getOneTasks(id)
  observable.subscribe(data => {
    console.log("Got one data!", data);
    this.oneTasks = data;
  })
}

createTaskFromService(){
  let observable = this._httpService.postTasks(this.newTask)
  observable.subscribe(data => {
    console.log("Got data from post back", data);
    this.newTask = {title: "", description: ""};
  })
}

deleteOneTaskFromService(id) {
  let observable = this._httpService.deleteTasks(id)
  observable.subscribe(data => {
    console.log("Got one data deleted", data);
    this.oneTasks = data;
  })
  this.getTaskFromService();

}

updateOneTaskFromService(id){
  this.updateInfo = {'title': this.oneTasks.title, 'description': this.oneTasks.description}
  let observable = this._httpService.updateTasks(id,this.updateInfo)
  observable.subscribe(data => {
    console.log("Got one task updated", data);
  })
  this.oneTasks = {title: "", description: ""};
  this.getTaskFromService();
}

}

