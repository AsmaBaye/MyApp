import './App.css';
import AddTask from './Addtask';
import Tasklist from './Tasklist';
import { useState } from 'react';

function App() {
	const [tasks,setTasks] = useState([]);

  function handleAdd(newtask){
    setTasks((prev)=> {
      return [...prev, newtask]
    })
  }

  // function handleDelete(input){
  //   setTasks( tasks.filter(
	// 		item=>(item !== input))
  //     )
	// }

  function handleDelete(id){
    return setTasks( [...tasks.slice(0,id),...tasks.slice(id+1)])
  }
 
   function handleEdit(id,e){
    const Lists = tasks.map((item,index) => {
      if(index === id){
        console.log("id is = ",id, "item is = ",item)
        return setTasks(e.target.value)
       
      }
      return item
    }
   )}
  return (
   <div className='App'>
     <h1 className='App-header'>
        To do list
     </h1>
     <AddTask handleAdd={handleAdd}/>
     <Tasklist tasks={tasks} handleDelete={handleDelete} handleEdit={handleEdit} handleAdd={handleAdd}/>
   </div>
  );
}

export default App;
