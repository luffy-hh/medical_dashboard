import dayjs from "dayjs";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
const expireToken = () => {
  localStorage.clear();
  window.location.href = "/auth";
};

const parseDate = (value) => {
  // console.log(value);
  // Check if the value is already in DD-MM-YYYY format
  if (dayjs(value, "DD-MM-YYYY", true).isValid()) {
    // console.log("dd-mm-yyy");
    // console.log(dayjs(value, "DD-MM-YYYY"));
    return dayjs(value, "DD-MM-YYYY");
  }
  // If the value is in YYYY-DD-MM format, convert it to DD-MM-YYYY
  if (dayjs(value, "YYYY-DD-MM", true).isValid()) {
    console.log("yyyy-dd-mm");

    return dayjs(value, "YYYY-DD-MM");
  }
  // If the value is in YYYY-MM-DD format, convert it to DD-MM-YYYY
  if (dayjs(value, "YYYY-MM-DD", true).isValid()) {
    console.log("yyyy-mm-dd");

    return dayjs(value, "YYYY-MM-DD");
  }

  return null;
};

const daysOfWeek = [];
const today = new Date();
const firstDayOfWeek = new Date(
  today.getFullYear(),
  today.getMonth(),
  today.getDate() - ((today.getDay() + 7) % 7),
);

for (let i = 0; i < 7; i++) {
  const day = new Date(firstDayOfWeek.getTime() + i * 86400000);
  const dayOfWeek = day.toLocaleString("en-US", { weekday: "long" });
  const dayOfMonth = day.toLocaleString("en-US", {
    month: "2-digit",
    day: "2-digit",
    year: "numeric",
  });
  daysOfWeek.push(`${dayOfWeek} ${dayOfMonth}`);
}
export { classNames, expireToken, parseDate, daysOfWeek };
