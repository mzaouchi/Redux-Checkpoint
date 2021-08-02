import { useState } from 'react';
import { Button,Modal,Form, Container,ButtonGroup,ToggleButton } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { editTask } from './actions';
function EditTask({task}){
    const [descriptionM,setDescriptionM] = useState(task.description);
    const [isDoneM,setIsDoneM] = useState(task.isDone);
    const [checked, setChecked] = useState(task.isDone);

    const [show, setShow] = useState(false);
    const handleClose = () => {setShow(false);}
    const handleShow = () => setShow(true);

    const dispatch = useDispatch();

    const handleEdit=()=>{
        dispatch(editTask({id : task.id, description : descriptionM ,isDone : checked}));
        setShow(false);


    }

    return(

        <div>
            <Button variant="primary" onClick={handleShow}>
                    Edit task
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                     <Modal.Title>Edit task</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    
                    <Form>
                    
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Description</Form.Label>
                            <Form.Control type="text" value={descriptionM} placeholder="Enter description" onChange={(e)=>setDescriptionM(e.target.value)} />
                        </Form.Group>

                        <ButtonGroup className="mb-2">
                            <ToggleButton
                                className="mb-2"
                                id="toggle-check"
                                type="checkbox"
                                variant="outline-primary"
                                checked={checked}
                                value="1"
                                onChange={(e) => setChecked(e.currentTarget.checked)}
                            >
                                Checked
                            </ToggleButton>
                         </ButtonGroup>
                                         
                     
                    </Form>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleEdit}>
                         Edit task
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default EditTask;