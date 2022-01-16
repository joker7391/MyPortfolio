const newDate = new Date();
const dates = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const computeMonth = dates[newDate.getMonth()];

const getDate =
  computeMonth +
  " " +
  ("" + newDate.getDate()).slice(-2) +
  "," +
  " " +
  " " +
  newDate.getFullYear();

export { getDate };
