import { ITodo } from "../types/TodosType"
import { observer } from "mobx-react-lite";
import store from "../store/store";
import styles from './styles.module.scss'
interface TodoProps extends ITodo {
    index: number;
}

export const Todo: React.FC<TodoProps> = observer(({id,title,index,completed}) => {
    return(
        <div >
                <span>{index + 1}. </span>
                <span 
                className={completed?styles.title_done:''}
                > {title}</span>
                <input type='checkbox' checked={completed}
                    onChange={() => store.changeState(id)}
                />
                <button onClick={() => store.removeTodo(id)}> x </button>
        </div>
    )
})