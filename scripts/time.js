function updateAmsterdamTime() {
    const options = {
        timeZone: 'Europe/Amsterdam',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
    };
    const formatter = new Intl.DateTimeFormat([], options);
    const now = new Date();
    const timeString = formatter.format(now);
    document.getElementById('headertime').textContent = `${timeString} AMS`;
}

updateAmsterdamTime();
setInterval(updateAmsterdamTime, 30000);