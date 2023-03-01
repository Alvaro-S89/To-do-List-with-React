import { createContext, useEffect, useState } from "react";


export const TodoContext = createContext()

export const TodoProvider = ({ children }) => {
    const [todosList, setTodosList] = useState(JSON.parse(localStorage.getItem("todos")) || [])

    useEffect(() => {
      localStorage.setItem("todos", JSON.stringify(todosList))
    }, [todosList])
    

    return(
        <TodoContext.Provider value={{todosList, setTodosList}}>
            {children}
        </TodoContext.Provider>
    )
}