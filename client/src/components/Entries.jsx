export default function Entries(props) {

  const {entries} = props;

  return (
    <>
      <h2>Entries</h2>

      <ul class="entry-list">
        {entries.map((entry, idx) => (
          <li class="entry" key={idx}>

            <span>${entry.starting_value} in {entry.starting_year} is the same as {entry.ending_value} in {entry.ending_year}</span>

            { entry.description
              ? <span class="entry-description">{entry.description}</span>
              : null
            }
            { entry.description
              ? <button>edit description</button>
              : <button>add description</button>
            }

            <button>delete</button>

          </li>
        ))}
      </ul>

    </>
  )
}
