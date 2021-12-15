export default function Entries(props) {

  const {entries} = props;

  return (
    <>
      <h3>Entries</h3>

      {entries.map((entry, idx) => (
        <div class="entry" key={idx}>

          <span>${entry.starting_value} in {entry.starting_year} is the same as {entry.ending_value} in {entry.ending_year}</span>

          <input />

          { entry.description
            ? <span class="entry-description">{entry.description}</span>
            : null
          }
          { entry.description
            ? <button>edit description</button>
            : <button>add description</button>
          }

        </div>
      ))}

    </>
  )
}
