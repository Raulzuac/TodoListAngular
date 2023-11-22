import { Injectable } from '@angular/core';
import { Task } from '../../Interfaces/task.interface';
import { v4 as uuid } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class TaskListServiceService {



  _tasks:Task[] = [];

  constructor() { }

  get getTasks(){
    return [...this._tasks.filter((task)=>task.completed==false)];
  }

  get getCompletedTasks(){
    return [...this._tasks.filter((task)=>task.completed==true)];
  }

  getTask(id:string){
    return this._tasks.find((task)=>task.id===id)
  }

  addTask(task:string,desc:string){
    this._tasks.push({
      id:uuid(),
      taskName:task,
      description:desc,
      completed:false,
    })
  }

  swapTakState(id:string):void{
    this._tasks.map((task)=>{if(task.id==id)task.completed=!task.completed})
  }


  deleteTask(id: string) {
    this._tasks= this._tasks.filter((task)=>task.id!=id);
  }

  modifyTask(id: string, taskname: string,description:string) {


    console.log({id,taskname});

   this._tasks.map((task)=>{
    if(task.id===id){
      task.taskName=taskname;
      task.description=description;
    }
  });
  }

  deleteTasks(){
    this._tasks=[];
  }

  cleanupTasks(){
    this._tasks = this._tasks.filter((task)=>!task.completed)
  }

  countTasks():number{
    return this._tasks.length
  }
}
