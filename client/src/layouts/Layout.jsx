import {Link} from 'react-router-dom';

export default function Layout(props) {

  const {currentUser} = props;

  return (
    <div>
      <header>
        <h1>Inflation Station</h1>
        <nav>
          { currentUser
            ? <span>User Logged In</span>
            : <Link to='/login'>Login/Register</Link>
          }
        </nav>
      </header>
      <hr />
      {props.children}
    </div>
  )
}
