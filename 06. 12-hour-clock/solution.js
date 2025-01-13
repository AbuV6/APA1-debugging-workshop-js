function convertTo12HourClock(time) {
  let [hour, minute] = time.split(":").map(Number);

  const ampm = hour >= 12 ? "PM" : "AM";
  if (hour > 12) {
    hour -= 12;
  } else if (hour === 0) {
    hour = 12;
  }

  return `${hour}:${minute < 10 ? "0" + minute : minute} ${ampm}`;
}

module.exports = { convertTo12HourClock };
