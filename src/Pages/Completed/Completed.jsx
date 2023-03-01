import React, { useContext } from 'react'
import { TodoItem } from '../../components/TodoItem/TodoItem'
import { TodoContext } from '../../context/TodosContext'

export const Completed = () => {
    const {todosList} = useContext(TodoContext)

    const completedTodos = todosList.filter((todo) => todo.status === 'completed')

    return (
        <div className='section-completed'>
            <TodoItem title="Completed" todos={completedTodos}/>
        </div>
    )
}