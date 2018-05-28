import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private _http: HttpClient) {
   }

   getTasks() {
    return this._http.get('/tasks');
   }

   getOneTasks(id:String) {
     return this._http.get('/tasks/'+ id +'');
   }

   postTasks(newTask){
     return this._http.post('/tasks',newTask);
   }

   deleteTasks(id:String){
     return this._http.delete('/tasks/' +id +'' );
   }

   updateTasks(id:String, updateInfo){
     return this._http.put('/tasks/'+ id +'', updateInfo);
   }
}

