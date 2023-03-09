import { Link } from "react-router-dom"

const NavBarMenu = () => {
    const id = 109
    const name = 'Vikash'
    return (
        <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <span className="navbar-brand" href="#">Navbar</span>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link to='/home' className="nav-link active" aria-current="page" ><span>Home</span></Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to='/dashboard'>DashBoard</Link>
        </li><li className="nav-item">
          <Link className="nav-link active" aria-current="page" to={`/admin/${id}/${name}`}>Admin</Link>
        </li><li className="nav-item">
          <Link className="nav-link active" aria-current="page" to='/about'>About</Link>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
<button className="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling">Enable body scrolling</button>

<div className="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
  <div className="offcanvas-header">
    <h5 className="offcanvas-title" id="offcanvasScrollingLabel">Offcanvas with body scrolling</h5>
    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div className="offcanvas-body">
    <p>Try scrolling the rest of the page to see this option in action.</p>
  </div>
</div></>
    )
}
export default NavBarMenu