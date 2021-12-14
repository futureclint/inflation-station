import {Link} from 'react-router-dom';

export default function Layout(props) {

  const {currentUser, handleLogout} = props;

  return (
    <>
      <header>
        <h1>Inflation Station</h1>
        <nav>
          <Link to='/'>Calculate</Link>
          <Link to='/about'>About</Link>
          { currentUser
            ? <Link to='/' onClick={handleLogout}>Logout</Link>
            : <Link to='/login'>Login/Register</Link>
          }
        </nav>
      </header>
      <hr />
      <main>
        {props.children}
      </main>
      <hr />
      <footer>
        <span>&copy; 2021 Clint Gunter</span>
        { currentUser
          ? <span>Logged in as {currentUser.email}</span>
          : ''
        }
      </footer>
    </>
  )
}
