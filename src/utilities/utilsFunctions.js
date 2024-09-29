import dayjs from "dayjs";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
const expireToken = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
  window.location.href = "/login";
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
export { classNames, expireToken, parseDate };
