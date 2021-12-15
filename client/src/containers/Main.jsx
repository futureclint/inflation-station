import {useState, useEffect} from 'react';
import {getAllEntries} from '../services/entry';
import Calculate from '../components/Calculate';
import Entries from '../components/Entries';

export default function Main(props) {

  const {currentUser} = props;

  const [inflation, setInflation] = useState([]);

  const [entries, setEntries] = useState([]);

  useEffect(() => {
    const fetchEntries = async () => {
      const entryList = await getAllEntries();
      setEntries(entryList);
    };
    if (currentUser) fetchEntries();
  }, [currentUser]);

  return (
    <>
      <Calculate />

      {/* Show entries if logged in */}
      {currentUser && <Entries entries={entries} />}

    </>
  )
}
