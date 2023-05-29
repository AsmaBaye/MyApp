import './Addtask'
import './Tasklist.css'
export default function Tasklist(props){

	const Lists = props.tasks.map(
		(input,id) => (
		<li key={id}>
			<input value={input} onChange={()=>props.handleAdd(input)}/>
			<button className='button1' onClick={()=>props.handleDelete(id)}> Delete</button>
			<button className='button2' onClick={(e)=>props.handleEdit(id,e)}> Edit</button>
		</li>
	))

	return(
		<ul className='list'>
			{Lists} 
		</ul>
	)
}