export function setupTimer(element: HTMLDivElement) {
  const updateTimer = () => {
    const currentDate = new Date();
    const hours = currentDate.getHours();
    const minutes = currentDate.getMinutes();
    const seconds = currentDate.getSeconds();
    const formattedTime = `${hours}:${minutes}:${seconds}`;

    element.innerHTML = `Today's date is ${currentDate.toDateString()}, and the current time is ${formattedTime}`;
  }
  updateTimer();
  setInterval(updateTimer, 1000);
}
