import style from './todo.module.css';
export default function ToDoItem({item,removeTodo,editTodo}){
    return(<>
      <article className={style.itemcontainer}>
        <input className={style.completed}
         type='checkbox' checked={item.completed} 
         onChange={(e)=>editTodo(item.id,e.target.checked)}
         />
        <p className={style.title}>{item.title}</p>
        <p className={style.priority}>{item.priority}</p>
        <button className={style.delete} onClick={() => removeTodo(item.id)} type="button">
          Delete
        </button>
      </article>
    </>)
}