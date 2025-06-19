import style from './todo.module.css';
export default function TaskCompleted({completedtask,total}){
    return(<>
      <div>
        <span>Task Status/</span><span>Total</span>
        <div>
            <button className={style.completedtask}>{completedtask}/{total}</button>
        </div>
        
       
      </div>
    </>)
}