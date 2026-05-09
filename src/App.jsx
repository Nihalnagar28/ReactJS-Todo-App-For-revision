import { useState } from 'react'
import Navbar from './components/Navbar'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar></Navbar>
   <div className="container mx-auto my-5 rounded-xl p-5 w-300 bg-violet-100 min-h-[80vh]">
    <div className="addTodo my-5">
      <h2 className='text-lg font-bold '>Add a Todo</h2>
      <input type="text" className='bg-white w-1/2'/>
      <button onClick={handleAdd} className='bg-violet-800 hover:bg-violet-950 p-2 text-sm py-1 font-bold text-white rounded-md mx-6'>Add</button>
   </div>
      <h2 className='text-lg font-bold'>Your TODOS</h2>
      <div className="todos">
        <div className="todo flex">
          <div className="text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus, quod?</div>
          <div className="buttons">
            <button className='bg-violet-800 hover:bg-violet-950 p-2 text-sm py-1 font-bold text-white rounded-md mx-1' onClick={handleEdit}>Edit</button>
            <button className='bg-violet-800 hover:bg-violet-950 p-2 text-sm py-1 font-bold text-white rounded-md mx-1' onClick={handleDelete}>Delete</button>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
