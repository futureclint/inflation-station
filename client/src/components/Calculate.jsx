import {useState} from 'react';

export default function Calculate(props) {

  const {handleEntryCreate} = props;

  const [formData, setFormData] = useState({
    starting_year: '',
    starting_amount: NaN,
    ending_year: '',
  })

  const { starting_year, starting_amount, ending_year } = formData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <>
      <h2>Calculate</h2>
      <form onSubmit={(e) => {
        e.preventDefault();
        handleEntryCreate(formData);
      }}>
        <label htmlFor='form-starting-year'>Starting Year</label>
        <input
          id='form-starting-year'
          type='text'
          name='starting_year'
          value={starting_year}
          onChange={handleChange}
        />
        <label htmlFor='form-starting-amount'>Starting Amount $</label>
        <input
          id='form-starting-amount'
          type='number'
          name='starting_amount'
          value={starting_amount}
          onChange={handleChange}
        />
        <label htmlFor='form-ending-year'>Ending Year</label>
        <input
          id='form-ending-year'
          type='text'
          name='ending_year'
          value={ending_year}
          onChange={handleChange}
        />
        <button>Calculate Ending Amount</button>
      </form>
    </>
  )
}
