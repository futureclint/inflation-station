import {useState} from 'react';

export default function Calculate() {

  const [formData, setFormData] = useState({
    starting_year: '',
    starting_amount: '',
    ending_year: '',
  })

  const { name } = formData;

  const handleChange = (e) => {
    const { starting_year, starting_amount, ending_year } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <>
      <h2>Calculate</h2>
      <form>
        <label htmlFor='form-starting-year'>Starting Year</label>
        <input
          id='form-starting-year'
          type='text'
          name='starting_year'
          value={name}
          onChange={handleChange}
        />
        <label htmlFor='form-starting-amount'>Starting Amount $</label>
        <input
          id='form-starting-amount'
          type='text'
          name='starting_amount'
          value={name}
          onChange={handleChange}
        />
        <label htmlFor='form-ending-year'>Ending Year</label>
        <input
          id='form-ending-year'
          type='text'
          name='ending_year'
          value={name}
          onChange={handleChange}
        />
        <button>Calculate Ending Amount</button>
      </form>
    </>
  )
}
