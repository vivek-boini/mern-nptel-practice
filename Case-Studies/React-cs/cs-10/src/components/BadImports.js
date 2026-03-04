import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import _ from "lodash";
import * as dateFns from "date-fns";
function BadImports() {
    const handleSearch = _.debounce((val) => {
        console.log("searched:", val);
    }, 300);
    const today = dateFns.format(new Date(), "yyyy-MM-dd");
    return (_jsxs("div", { children: [_jsx("h2", { children: "Bad Imports (whole libraries)" }), _jsxs("p", { children: ["Today: ", today] }), _jsx("input", { onChange: (e) => handleSearch(e.target.value), placeholder: "Search..." }), _jsx("p", { children: "lodash: full library imported (~70KB). date-fns: full library imported (~75KB). Open stats.html after build to see the bloat." })] }));
}
export default BadImports;
