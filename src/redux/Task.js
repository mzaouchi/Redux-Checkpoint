import { Card,Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { deleteTask } from "./actions";
import EditTask from "./EditTask";
import ReadMore from "./ReadMore";

function Task({task}){
    const dispatch = useDispatch();
    return(
        <div>
          
        {/* <h1>{task.description}</h1>
        <h1>{task.isDone ? 'Vrai' : 'faux'}</h1>
        <button onClick={()=>dispatch(deleteTask(task))}>Delete</button>
        <EditTask task = {task}></EditTask> */}


        <Card style={{ width: '18rem' }}>
        <Card.Body>
            <Card.Title>Task ID : {task.id}</Card.Title>
            <ReadMore task = {task}></ReadMore>
            <Card.Text style={{color : task.isDone ? 'green' : 'red' }}>
            {task.isDone ? 'Task done' : 'Task not done'}
            </Card.Text>
            <Button variant="primary" onClick={()=>dispatch(deleteTask(task))}>Delete Task</Button>
            <br/>
            <br/>
            <EditTask task = {task}></EditTask>
        </Card.Body>
        </Card>
            
        </div>
    )
}

export default Task;