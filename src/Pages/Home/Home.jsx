import React, { useContext, useState } from 'react'
import { TodoContext } from '../../context/TodosContext'
import { v4 as uuidv4 } from 'uuid';
import './Home.css'

export const Home = () => {
  const {todosList, setTodosList } = useContext(TodoContext);
  

  const addTodo = (e) => {
    setTodosList([...todosList, formData])
    setFormData({
    id:"",
    text:"",
    status:"pending",})
  }

const [formData, setFormData] = useState({
  id:uuidv4(),
  text:"",
  status:"pending",
})
console.log(formData)
const handleChangeFormData = (e) => {
  setFormData({...formData, [e.target.name]: e.target.value})
}


  return (
    <div className='section-form'>
      <form onSubmit={addTodo}>
        <input 
          type="text" 
          name="text"
          value={formData.text} 
          id={formData.id} 
          placeholder='Insert task here'
          onChange={handleChangeFormData} 
        />
        <select 
          name="status"
          value={formData.status} 
          id="status" 
          onChange={handleChangeFormData}
        >
          <option value="pending">Pending</option>
          <option value="inProgress">In Progress</option>
          <option value="completed">Completed</option>
        </select>
        <div>
        <button className="addBtn" type="submit">Add</button>
        </div>
      </form>
    </div>
  )
}
