import {makeAutoObservable} from 'mobx'
import {  TODOS_FOR_LS } from '../../utils/constants'
import { Todos } from '../types/TodosType'

interface INewTodo{
    id:number,
    title:string,
    completed:boolean
}

//надо синхронизировать с ЛокалСТораджем



class Store{
    todos:Todos = [];
    constructor(){
        makeAutoObservable(this)
 }

 addTodo(newTodo: INewTodo):void{
    this.todos.push(newTodo)
    localStorage.setItem(TODOS_FOR_LS,JSON.stringify(this.todos))
 }
 removeTodo(id:number):void{
    this.todos = this.todos.filter(item => item.id !== id)
    localStorage.setItem(TODOS_FOR_LS,JSON.stringify(this.todos))
 }
 changeState(id:number):void{
    this.todos = this.todos.map(el => el.id === id? {...el,completed: !el.completed} : el)
    localStorage.setItem(TODOS_FOR_LS,JSON.stringify(this.todos))
 }
 getStateFromLS() {
    const stateFromLS:any = localStorage.getItem(TODOS_FOR_LS);
    const parsedStateFromLS:Todos = JSON.parse(stateFromLS)
    if(parsedStateFromLS){
        this.todos = parsedStateFromLS;
    }
 }
}
export default new Store()