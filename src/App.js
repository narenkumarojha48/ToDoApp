
import './App.css';
import ToDoList from './components/todo/todoList';
import AddToDo from './components/todo/addToDo';
import TaskCompleted from './components/todo/taskCompleted';
import { data } from './components/todo/toDoData';
import { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
function App() {
  const [todo,setTodo] = useState(data);
  let completedtask = todo?.filter(task=>task.completed === true).length;
  function addToDo(title,priority,completed){
    setTodo([...todo, { id: Date.now(), title: title, priority: priority, completed: completed }])
    toast.success('✅ Item added!');
  }
  function removeTodo(id){
    let temp = todo.filter(item => item.id !== id);
    setTodo(temp)
  }
  function editTodo(id,completed){
    let temp = todo.map(itm=>{
      if(itm.id===id){
        return {...itm,completed}
      }
      return itm
    });
    setTodo(temp);
    toast.success('✅ Task Completed!');
  }
 
  return (
    <div className="app">
      <header>
       <p>To Do Application</p>
      </header>
      
      <section className=''>
        <ToastContainer position="top-right" autoClose={3000} />
        <TaskCompleted completedtask={completedtask} total={todo.length}/>
        <AddToDo addToDo={addToDo}/>
        <ToDoList data={todo} removeTodo={removeTodo} editTodo={editTodo}/>
      </section>
     
    </div>
  );
}

export default App;
