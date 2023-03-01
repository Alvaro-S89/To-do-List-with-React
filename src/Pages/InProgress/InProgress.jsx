import React, { useContext } from 'react'
import { TodoItem } from '../../components/TodoItem/TodoItem'
import { TodoContext } from '../../context/TodosContext'

export const InProgress = () => {
    const {todosList} = useContext(TodoContext)

    const inProgressTodos = todosList.filter((todo) => todo.status === 'inProgress')

    return (
        <div className='section-progress'>
            <TodoItem title="In Progress" todos={inProgressTodos}/>
        </div>
    )
}
