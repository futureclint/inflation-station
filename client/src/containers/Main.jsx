import {useState, useEffect} from 'react';
import {getAllEntries, postEntry} from '../services/entry';
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

  return (
    <>
      <Calculate handleEntryCreate={handleEntryCreate} />

      {/* Show entries if logged in */}
      {currentUser && <Entries entries={entries} />}

    </>
  )
}
