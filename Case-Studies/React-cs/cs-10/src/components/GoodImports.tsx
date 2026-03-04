// GOOD: only imports the debounce function (~2KB)
import debounce from "lodash/debounce";

// GOOD: only imports the format function — tree shaking removes the rest
import { format } from "date-fns";

function GoodImports() {
  // same functionality, fraction of the bundle cost
  const handleSearch = debounce((val: string) => {
    console.log("searched:", val);
  }, 300);

  const today = format(new Date(), "yyyy-MM-dd");

  return (
    <div>
      <h2>Good Imports (selective imports)</h2>
      <p>Today: {today}</p>
      <input onChange={(e) => handleSearch(e.target.value)} placeholder="Search..." />
      <p>
        lodash/debounce: only debounce imported (~2KB). date-fns format: tree shaken (~3KB).
        Compare sizes in stats.html after switching to this approach.
      </p>
    </div>
  );
}

export default GoodImports;