import {Link} from 'react-router-dom';

export default function Layout(props) {
  return (
    <div>
      <header>
        <h1>Inflation Station</h1>
        <nav>
          <Link to='/login'>Login/Register</Link>
        </nav>
      </header>
      {props.children}
    </div>
  )
}
