import logo from './logo.svg';
import './App.css';
import AddTasks from './redux/AddTasks';
import ListTasks from './redux/ListTasks';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import NavBarList from './redux/NavBarList';




function App() {
   
  return (
    <div>
      <Container>
      <NavBarList></NavBarList>
      <br/>  
      <ListTasks></ListTasks>
      </Container>
      
    </div>
  );
}

export default App;
