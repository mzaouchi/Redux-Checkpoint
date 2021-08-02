import { Container, Nav, Navbar } from "react-bootstrap";
import AddTasks from "./AddTasks";

function NavBarList(){
    return(
        
            <Navbar bg="primary" variant="dark">
                <Container>
                <Navbar.Brand>Redux Checkpoint</Navbar.Brand>
                <AddTasks></AddTasks>
                </Container>
            </Navbar>
       
    )
}

export default NavBarList;