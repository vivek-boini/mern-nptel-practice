// BAD: imports the entire lodash library (~70KB gzipped)
// Even though we only use debounce, the full library is bundled
import _ from "lodash";

// BAD: imports all of date-fns (~75KB gzipped)
// We only need format, but everything is included
import * as dateFns from "date-fns";

function BadImports() {
  // only debounce is used — rest of lodash is dead weight
  const handleSearch = _.debounce((val: string) => {
    console.log("searched:", val);
  }, 300);

  // only format is used — rest of date-fns is dead weight
  const today = dateFns.format(new Date(), "yyyy-MM-dd");

  return (
    <div>
      <h2>Bad Imports (whole libraries)</h2>
      <p>Today: {today}</p>
      <input onChange={(e) => handleSearch(e.target.value)} placeholder="Search..." />
      <p>
        lodash: full library imported (~70KB). date-fns: full library imported (~75KB).
        Open stats.html after build to see the bloat.
      </p>
    </div>
  );
}

export default BadImports;