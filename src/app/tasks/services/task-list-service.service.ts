import { Injectable } from '@angular/core';
import { Task } from '../../Interfaces/task.interface';
import { v4 as uuid } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class TaskListServiceService {

  _tasks:Task[] = [];
  _completedTasks:Task[] = [];

  constructor() { }

  get getTasks(){
    return [...this._tasks];
  }

  get getCompletedTasks(){
    return [...this._completedTasks];
  }

  addTask(task:string){
    this._tasks.push({
      id:uuid(),
      taskName:task,
      completed:false
    })
  }

  swapTakState(id:string):void{
    let task:Task = this._tasks.filter((task) => task.id===id)[0];
    if(!task) task = this._completedTasks.filter((task)=>task.id=id)[0];
    if(!task)return;
    console.log(task.completed);

    if(task.completed===true){
      console.log('Estaba completa');

      task.completed=false;
      this._completedTasks = this._completedTasks.filter((task)=>task.id===id);
      this._tasks.push(task);

    }else{
      console.log('No estaba completa');

      task.completed=true;
      this._tasks = this._tasks.filter((task)=>task.id===id);
      this._completedTasks.push(task);

    }
  }
}
