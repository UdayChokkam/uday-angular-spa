import { Component, OnInit } from '@angular/core';
import {APIService} from '../API.service';
import { FormBuilder } from '@angular/forms';
import * as queries from '../../graphql/queries';
import * as mutations from '../../graphql/mutations';
import {API, graphqlOperation} from 'aws-amplify';
import {todos} from '../todos';

@Component({
  selector: 'app-drivers',
  templateUrl: './drivers.component.html',
  styleUrls: ['./drivers.component.css']
})
export class DriversComponent implements OnInit {
  todos;
  todoForm;
   constructor(private service: APIService, private formBuilder: FormBuilder) {
    this.todos =  todos; //API.graphql(graphqlOperation(queries.listMyTypes));
    this.todoForm = this.formBuilder.group({
      id: '',
      name: '',
      content: '',
    });
  }

  ngOnInit() {
  }

  createItem(todo) {
    console.log(todo.id);
    API.graphql(graphqlOperation(mutations.createMyType, {input: todo}));
    this.todos = this.service.ListMyTypes();
  }

  deleteItem() {

  }

}
