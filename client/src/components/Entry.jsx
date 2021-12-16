import {useState} from 'react';

export default function Entry(props) {

  const {entry, idx, handleEntryUpdate, handleEntryDelete} = props;

  const [formData, setFormData] = useState({
    description: entry.description,
  })

  const { description } = formData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <li className="entry" key={idx}>

      <span>${entry.starting_value} in {entry.starting_year} is the same as {entry.ending_value} in {entry.ending_year}</span>

      {/*
      { entry.description
        ? <span className="entry-description">{entry.description}</span>
        : null
      }
      */}

      <form onSubmit={(e) => {
        e.preventDefault();
        handleEntryUpdate(entry.id, formData);
      }}>

        <input
          type='text'
          name='description'
          value={description}
          onChange={handleChange}
        />

        {/*
        <button>{ entry.description ? 'edit' : 'add' } description</button>
        */}
        <button>Submit</button>

      </form>

      <button onClick={() => handleEntryDelete(entry.id)}>delete</button>

    </li>
  )
}
