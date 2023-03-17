import { Todo } from "../Todo/Todo"
import { Todos } from "../types/TodosType"
import styles from './styles.module.scss'
import store from "../store/store"
import { observer } from "mobx-react-lite";

interface ITodoList{
    todos:Todos
}

export const TodoList:React.FC<ITodoList>= observer(() => {
    return (
        <main className={styles.main}>
          {store.todos.map((el,i) => {
            return (
              <Todo key={el.id} {...el} index ={i}/>
            )
          })}
      </main>
    )
})