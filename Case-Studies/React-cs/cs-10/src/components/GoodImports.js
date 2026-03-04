import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import debounce from "lodash/debounce";
import { format } from "date-fns";
function GoodImports() {
    const handleSearch = debounce((val) => {
        console.log("searched:", val);
    }, 300);
    const today = format(new Date(), "yyyy-MM-dd");
    return (_jsxs("div", { children: [_jsx("h2", { children: "Good Imports (selective imports)" }), _jsxs("p", { children: ["Today: ", today] }), _jsx("input", { onChange: (e) => handleSearch(e.target.value), placeholder: "Search..." }), _jsx("p", { children: "lodash/debounce: only debounce imported (~2KB). date-fns format: tree shaken (~3KB). Compare sizes in stats.html after switching to this approach." })] }));
}
export default GoodImports;
