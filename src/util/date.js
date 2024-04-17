import { format, register } from "timeago.js";
import koLocale from "timeago.js/lib/lang/ko";

register("ko", koLocale);

export function formatAgo(date, lang = "en_US") {
  return format(date, lang);
}

const fullLength = (str) => {
  return String(str).padStart(2, "0");
};

const genDate = (dateAt) => {
  return {
    year: new Date(dateAt).getFullYear(),
    month: new Date(dateAt).getMonth() + 1,
    date: new Date(dateAt).getDate(),
  };
};

export function formatDate(dateAt) {
  return [
    genDate(dateAt).year,
    fullLength(genDate(dateAt).month),
    fullLength(genDate(dateAt).date),
  ].join(".");
}
