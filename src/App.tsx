import { observer } from "mobx-react-lite";
import React, { useEffect, useState } from 'react';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { TodoList } from './components/TodoList/TodoList';
import { Todos } from './components/types/TodosType';
import { Value } from './components/types/TypeValue';
import store from "./components/store/store";
import './App.css'


const  App: React.FC = observer(() => {
const [value,setValue] = useState<Value>('')
const [todos, setTodos] = useState<Todos>([])
useEffect(() => {
  store.getStateFromLS()
},[])



  return (
    <div className='App'>
      <Header value={value} 
        setValue={setValue} 
        todos={todos} 
        setTodos={setTodos}/>
      <TodoList todos={todos}/>
      <Footer/>
    </div>
  );
})

export default App;