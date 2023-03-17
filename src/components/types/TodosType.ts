export interface ITodo {
    id: number,
    title: string,
    completed: boolean
}

export type Todos = ITodo[];

export type TodosFromLS = Todos | null 

