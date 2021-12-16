import {useState} from 'react';

export default function Entry(props) {

  const {entry, idx, currentUser, handleEntryUpdate, handleEntryDelete} = props;

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
    <>
      { currentUser.id === entry.user_id ? (
        <li className="entry" key={idx}>

          <span><b>${entry.starting_value}</b> in <b>{entry.starting_year}</b> is the same as <b>${entry.ending_value}</b> in <b>{entry.ending_year}</b></span>

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

            <button>{ entry.description ? 'edit' : 'add' } description</button>

          </form>

          <button onClick={() => handleEntryDelete(entry.id)}>delete</button>

          {/* NOTE: temp spacing */}
          <br /><br />

        </li>
      ) : ''}
    </>
  )
}
