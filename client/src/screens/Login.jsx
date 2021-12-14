import {useState} from 'react';
import {Link} from 'react-router-dom';

export default function Login() {
  const[formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const {email, password} = formData;

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  return (
    <>
      <h2>Login</h2>
      <form>
        <label for='form-email'>email</label>
        <input id='form-email'
          type='text'
          name='email'
          value={email}
          onChange={handleChange}
        />
        <label for='form-password'>password</label>
        <input id='form-password'
          type='password'
          name='password'
          value={password}
          onChange={handleChange}
        />
        <Link to='/register'>Register</Link>
        <button>Submit</button>
      </form>
    </>
  )
}
