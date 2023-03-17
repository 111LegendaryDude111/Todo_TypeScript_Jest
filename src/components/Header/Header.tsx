import { Todos } from "../types/TodosType";
import styles from './styles.module.scss'
import store from "../store/store";
import { observer } from "mobx-react-lite";
import { useEffect, useRef } from "react";
interface HeaderProps {
    value: string;
    setValue: (str:string)=>void;
    setTodos: (arr:Todos)=>void;
    todos:Todos;
}


export const Header: React.FC<HeaderProps> = observer(({value,setValue}) => {
        const changeHandler:React.ChangeEventHandler<HTMLInputElement> = (e) => {
          setValue(e.target.value)
        }

        const handleKeyDown:React.KeyboardEventHandler<HTMLInputElement>  = (e) => {
           if(e.key === 'Enter') addToDoHandler() 
        }

        const addToDoHandler = ():void => {
            store.addTodo(
              {
                id:Date.now(),
                title: value,
                completed: false
              }
            )
            setValue('')
        }

        const inputRef = useRef<HTMLInputElement>(null)

        useEffect(()=> {
          if (inputRef.current) inputRef.current.focus()
        },[])
    return (
        <header 
        className={styles.header}
        >
            <input value={value} onChange={changeHandler} ref={inputRef} onKeyDown={handleKeyDown}/>
            <button onClick={addToDoHandler}> Добавить задачу</button>
      </header>
    )
})