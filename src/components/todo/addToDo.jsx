import { useState } from "react";
import { toast } from "react-toastify";
import style from './todo.module.css';
export default function AddToDo({addToDo}){
    const [title,setTitle] = useState("");
    const [priority,setPriority]= useState("low")
   async function handleSubmit(e){
        e.preventDefault();
        if(!title?.trim()){
            toast.error("Please enter the title")
        }else{
             addToDo(title,priority,false)
             setTitle("")
        }

    }
    return(<div className={style.addTodo}>
        <form onSubmit={handleSubmit}>
        <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)}/>
        <select value={priority} onChange={(e)=>setPriority(e.target.value)}>
            <option value="high" name="priority">High</option>
            <option value="low" name="priority" >Low</option>
            <option value="medium" name="priority">Medium</option>
        </select>
        <button type="submit">Add</button>
        </form>
    </div>)
}