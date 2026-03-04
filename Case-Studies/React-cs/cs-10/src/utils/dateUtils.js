import { format, parseISO, differenceInDays } from "date-fns";
export function formatDate(date) {
    return format(date, "yyyy-MM-dd");
}
export function parseDate(dateStr) {
    return parseISO(dateStr);
}
export function daysBetween(a, b) {
    return differenceInDays(b, a);
}
