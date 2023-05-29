import './Addtask.css'
import { useState } from 'react'

export default function AddTask(props){

	// const inputRef = useRef(null)
	const [text,setText] = useState('')

	const handleKeyDown = e => {
		if(e.key === 'Enter'){
			props.handleAdd(text)
		}
	}
	return(
		<div className="AddTask">
			<input placeholder="Add a task to Todo"  className="input" value={text} onKeyDown={handleKeyDown} 
			onChange={(e) => setText(e.target.value)}/>
			<button className="TaskButton" onClick={()=>props.handleAdd(text)}>Add</button>
		</div>
	)
}
