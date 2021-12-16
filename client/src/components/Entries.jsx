import {useState} from 'react';
import Entry from '../components/Entry';

export default function Entries({ entries, handleEntryUpdate, handleEntryDelete }) {

  return (
    <>
      {/* NOTE: temp separator */}
      <br />
      <p>- - - - -</p>
      <br />

      <h2>Entries</h2>

      <ul className="entry-list">
        {entries.map((entry, idx) => (
          <Entry
            entry={entry}
            idx={idx}
            handleEntryUpdate={handleEntryUpdate}
            handleEntryDelete={handleEntryDelete}
          />
        ))}
      </ul>

    </>
  )
}
