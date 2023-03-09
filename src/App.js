import './App.css';
import {
  BrowserRouter,  
  
} from "react-router-dom";
import SideNavBar from './views/sideNav';
import TestRouting from './Router/path';

function App() {
  const routes = TestRouting
  const temp = []
  routes.forEach((item) => {
    if (item.path) {
      temp.push(item.path)
    }
  })
 
  return (
      <>
      <BrowserRouter>
      <SideNavBar />
      </BrowserRouter>
      
      </>
    );
}

export default App;
