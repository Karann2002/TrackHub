import styles from '../Login/Welcome.module.css'
import { useNavigate } from 'react-router-dom'

const WelcomePage = (props) => {
  const { loggedIn, email } = props
  const navigate = useNavigate()

  const onButtonClick = () => {
    if (loggedIn) {
        localStorage.removeItem('user')
        props.setLoggedIn(false)
      } else {
        navigate('/login')
      }}

  return (
    <div className={styles.mainContainer}>
      <div className={styles.titleContainer}>
        <div><h3>Welcome! TO </h3><h1>TRACK-HUB</h1></div>
      </div>
      {/* <div>This is the home page.</div> */}
      <div className={styles.buttonContainer}>
        <input
          className={styles.inputButton}
          type="button"
          onClick={onButtonClick}
          value={loggedIn ? 'Log out' : 'Log in'}
        />
        {loggedIn ? <div>Your email address is {email}</div> : <div />}
      </div>
    </div>
  )
}

export default WelcomePage;