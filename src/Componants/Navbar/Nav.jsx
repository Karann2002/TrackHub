import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <div>
      <nav className="container">
        <div><Link to="/" style={{textDecoration: 'none'}}>
          <h1>Track-Hub</h1>
          </Link>
        </div>
        <ul>
            <Link to='/' style={{paddingLeft: 13, textDecoration: 'none'}}>
          <li>Home</li>
          </Link>
          <Link to='/message' style={{paddingLeft: 13, textDecoration: 'none'}}>
          <li>Message</li>
          </Link>
          <Link to='/notification' style={{paddingLeft: 13, textDecoration: 'none'}}>
          <li>Notification</li>
          </Link>
          <Link to='/profile' style={{paddingLeft: 13, textDecoration: 'none'}}>
          <li>Profile</li>
          </Link>
        </ul>
      </nav>
    </div>
  )
}

export default Nav
