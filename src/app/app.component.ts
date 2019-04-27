import { Component } from '@angular/core';
import { trigger, state, style, transition, animate, keyframes } from "@angular/animations";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations:[
    trigger('EnterLeave', [
      state('flyIn', style({ transform: 'translateY(0)' })),
      transition(':enter', [
        style({ transform: 'translateY(-100%)' }),
        animate('200ms')
      ]),
      transition(':leave', [
        animate('.4s ease-out', style({ transform: 'translateX(100%)' }))
      ])
    ])
  ]
    
//   animations:[
//     trigger("EnterLeave",[
//       state('flyIn', style({ transform: 'translateX(0)' })),
//        transition("void=> *",[style({transform:"translateX(300px)"}),
//          animate(200,keyframes([
//           style({transform:"translateX(300px)"}),
//           style({transform:"translateX(0)"})
  
//            ]))]),
//  transition("*=>void",[style({transform:"translateX(0px)"}),
//          animate(100,keyframes([
//           style({transform:"translateX(0px)"}),
//           style({transform:"translateX(300px)"})
  
//            ]))])    
      
//      ])
//  ]
})
export class AppComponent {
  title = 'todo-app';
  todoArray = [];

  addTodo(value){
    this.todoArray.push(value);
    console.log(value);
  }

  deleteItem(todo){
    for(let i=0; i<=this.todoArray.length; i++){
      if(todo == this.todoArray[i]){
        this.todoArray.splice(i,1);
        console.log('Item Deleted');
      }
    }
  }

  todoSubmit(value){
    if(value !== ""){
      this.todoArray.push(value.todo);
      // this.todoForm.reset();
    }else{
      alert('Failed Request **');
    }
  }

  
}
