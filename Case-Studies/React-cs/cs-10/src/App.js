import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import GoodImports from "./components/GoodImports";
import { formatDate, daysBetween } from "./utils/dateUtils";
function App() {
    const start = new Date("2024-01-01");
    const end = new Date();
    const days = daysBetween(start, end);
    const todayFormatted = formatDate(end);
    return (_jsxs("div", { children: [_jsx("h1", { children: "ShopEase Bundle Analysis Demo" }), _jsxs("section", { children: [_jsxs("p", { children: ["Today: ", todayFormatted] }), _jsxs("p", { children: ["Days since Jan 1 2024: ", days] })] }), _jsx("hr", {}), _jsx(GoodImports, {}), _jsx("hr", {}), _jsxs("section", { children: [_jsx("h2", { children: "How to analyze" }), _jsx("p", { children: "1. Run: npm run build" }), _jsx("p", { children: "2. stats.html opens automatically \u2014 inspect library sizes in the treemap" }), _jsx("p", { children: "3. Swap GoodImports for BadImports in App.tsx, rebuild, compare the treemap" }), _jsx("p", { children: "4. Check terminal output for per-chunk sizes (gzip column)" })] })] }));
}
export default App;
