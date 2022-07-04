import {TodoITtem} from './TodoItem.js';

export class Todolist {
    constructor() {
        this.todos = [];
    }
    add(todo) {
        this.todos.push(new TodoITtem(todo));
    }
}