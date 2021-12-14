import {useState} from 'react';

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
      <button>Submit</button>
    </form>
  )
}
