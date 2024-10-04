import { Link } from "react-router-dom"

const Nav = () => {
  return (
    <div>
      <nav className="container">
        <div><Link to="/">
          <h1>Track-Hub</h1>
          </Link>
        </div>
        <ul>
            <Link to='/'>
          <li>Home</li>
          </Link>
          <Link to='/message'>
          <li>Message</li>
          </Link>
          <Link to='/notification'>
          <li>Notification</li>
          </Link>
          <Link to='/profile'>
          <li>Profile</li>
          </Link>
        </ul>
        <Link to="/login">
        <button >Login</button>
        </Link>
      </nav>
    </div>
  )
}

export default Nav
