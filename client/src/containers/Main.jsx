import {useState, useEffect} from 'react';
import {getAllEntries} from '../services/entry';
import Calculate from '../screens/Calculate';

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

      { currentUser
        ? <div class="entries">
            <h3>Entries</h3>
            <span>${entries[0]?.starting_value} in {entries[0]?.starting_year} is the same as ${entries[0]?.ending_value} in {entries[0]?.ending_year}</span>
          </div>
        : null
      }

    </>
  )
}
