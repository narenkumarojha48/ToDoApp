import ToDoItem from './todoItem';
export default function ToDoList({data,removeTodo,editTodo}){
    return(<>
    <section>
      {data.map(item=>(
        <ToDoItem key={item.id} item={item} removeTodo={removeTodo} editTodo={editTodo}/>
      ))}
    </section>
      
    </>)
}