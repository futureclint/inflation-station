import {useState} from 'react';

export default function Register(props) {

  const[formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const {email, password} = formData;

  const {handleLogin} = props;

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  return (
    <>
      <h2>Register</h2>
      <form onSubmit={(e) => {
        e.preventDefault();
        // handleLogin(formData);
      }}>
        <label htmlFor='form-email'>email</label>
        <input id='form-email'
          type='text'
          name='email'
          value={email}
          onChange={handleChange}
        />
        <label htmlFor='form-password'>password</label>
        <input id='form-password'
          type='password'
          name='password'
          value={password}
          onChange={handleChange}
        />
        <button>Submit</button>
      </form>
    </>
  )
}
