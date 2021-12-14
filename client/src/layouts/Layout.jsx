import {Link} from 'react-router-dom';

export default function Layout(props) {

  const {currentUser, handleLogout} = props;

  return (
    <div>
      <header>
        <h1>Inflation Station</h1>
        <nav>
          { currentUser
            ? <div>
                <span>{currentUser.email}</span>
                <button onClick={handleLogout}>Logout</button>
              </div>
            : <Link to='/login'>Login/Register</Link>
          }
        </nav>
      </header>
      <hr />
      {props.children}
    </div>
  )
}
