import { Button, Form,Modal } from "react-bootstrap";
import { useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import { addTask } from "./actions";

function AddTasks(){
    const dispatch = useDispatch();
    const tasksTab = useSelector(state => state.tasks);
    const [text,setText] = useState('');

    const [show, setShow] = useState(false);
    const handleClose = () => {setShow(false);}
    const handleShow = () => setShow(true);

    const handleAdd=()=>{
        dispatch(addTask({id : tasksTab.length +1, description : text ,isDone : false}));
        setShow(false);


    }
    return(
        <div>
        
        <Button variant="light" onClick={handleShow}>
                    Add task
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                     <Modal.Title>Add task</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    
                    <Form>
                    
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Description</Form.Label>
                            <Form.Control type="text"  placeholder="Enter description" onChange={(e)=>setText(e.target.value)} />
                        </Form.Group>

                                            
                    </Form>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleAdd}>
                         Add task
                    </Button>
                </Modal.Footer>
            </Modal>






        </div>

    )
}

export default AddTasks;