// Centralizing imports means one place to fix if you switch libraries
import { format, parseISO, differenceInDays } from "date-fns";

// only the three functions above are bundled — not all of date-fns
export function formatDate(date: Date): string {
  return format(date, "yyyy-MM-dd");
}

export function parseDate(dateStr: string): Date {
  return parseISO(dateStr);
}

export function daysBetween(a: Date, b: Date): number {
  return differenceInDays(b, a);
}