import GoodImports from "./components/GoodImports";
import { formatDate, daysBetween } from "./utils/dateUtils";

// To test BAD imports: swap GoodImports for BadImports, rebuild, compare stats.html
// import BadImports from "./components/BadImports";

function App() {
  const start = new Date("2024-01-01");
  const end = new Date();
  const days = daysBetween(start, end);
  const todayFormatted = formatDate(end);

  return (
    <div>
      <h1>ShopEase Bundle Analysis Demo</h1>

      <section>
        <p>Today: {todayFormatted}</p>
        <p>Days since Jan 1 2024: {days}</p>
      </section>

      <hr />

      {/* Switch between GoodImports and BadImports, rebuild, and compare stats.html */}
      <GoodImports />
    </div>
  );
}

export default App;