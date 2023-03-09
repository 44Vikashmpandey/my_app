import { Link } from 'react-router-dom';
import Rounting from '../../Router/Route';
import './index.css'

const SideNavBar = () => {
    
    const id = 109
    const name = 'Vikash'
    function openNav() {
        document.getElementById("mySidenav").style.width = "200px";
        document.getElementById("main").style.marginLeft = "200px";
      }
      
      function closeNav() {
        document.getElementById("mySidenav").style.width = "0";
        document.getElementById("main").style.marginLeft= "0";
      }
       
    return (
        <>
            <div id="mySidenav" className="sidenav" >
                <span  className="closebtn" onClick={closeNav}>close</span>
                <div><Link to='/about'><span >About</span></Link></div>
                <Link to='/home'><span >Home</span></Link>
                <Link to='/dashboard'><span >DashBoard</span></Link>
                <Link to={`/admin/${id}/${name}`}><span >Admin</span></Link>
            </div>

            <div id="main">
            <span  onClick={openNav} onMouseOver={openNav}> open</span>
                <h2>Sidenav Push Example</h2>
                <p>Click on the element below to open the side navigation menu, and push this content to the right vikash pandey .</p>
                <Rounting />
                
            </div>

        </>
    )
}

export default SideNavBar