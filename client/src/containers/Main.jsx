import {useState, useEffect} from 'react';
import {getAllEntries, postEntry, putEntry, deleteEntry} from '../services/entry';
import Calculate from '../components/Calculate';
import Entries from '../components/Entries';

export default function Main(props) {

  const {currentUser} = props;

  const [entries, setEntries] = useState([]);

  useEffect(() => {
    const fetchEntries = async () => {
      const entryList = await getAllEntries();
      setEntries(entryList);
    };
    if (currentUser) fetchEntries();
  }, [currentUser]);

  const handleEntryCreate = async (formData) => {
    const newEntry = await postEntry(formData);
    setEntries(prevState => [...prevState, newEntry]);
  }

  const handleEntryDelete = async (id) => {
    await deleteEntry(id);
    setEntries(prevState => prevState.filter(entry => entry.id !== id));
  }

  const handleEntryUpdate = async (id, formData) => {
    const newEntry = await putEntry(id, formData);
    setEntries((prevState) =>
      prevState.map((entry) => {
        return entry.id === Number(id) ? newEntry : entry;
      })
    );
  };

  return (
    <>
      <Calculate handleEntryCreate={handleEntryCreate} />

      {/* Show entries if logged in */}
      {currentUser && <Entries
        entries={entries}
        currentUser={currentUser}
        handleEntryUpdate={handleEntryUpdate}
        handleEntryDelete={handleEntryDelete}
      />}

    </>
  )
}
