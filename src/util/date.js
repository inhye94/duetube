import { format, register } from "timeago.js";
import koLocale from "timeago.js/lib/lang/ko";

register("ko", koLocale);

export function formatAgo(date, lang = "en_US") {
  return format(date, lang);
}

export function formatDate(dateAt) {
  const fullLength = (str) => {
    return str.padStart(2, "0");
  };

  const date = new Date();

  const _year = date.getFullYear();
  const _month = fullLength("" + (date.getMonth() + 1));
  const _day = fullLength("" + date.getDay());

  return [_year, _month, _day].join(".");
}
