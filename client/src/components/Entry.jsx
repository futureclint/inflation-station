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

          <span>${entry.starting_value} in {entry.starting_year} is the same as {entry.ending_value} in {entry.ending_year}</span>

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

        </li>
      ) : ''}
    </>
  )
}
