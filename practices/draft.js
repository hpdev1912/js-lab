function addZeroToTime(value) {
    return value < 10 ? `0${value}` : value.toString();
}

function getCurrentTime() {
    const intervalId = setInterval(() => {
        const now = new Date();
        const hour = now.getHours();
        const minutes = now.getMinutes();
        const seconds = now.getSeconds();
        console.log(`${addZeroToTime(hour)}:${addZeroToTime(minutes)}:${addZeroToTime(seconds)}`);
    }, 1000);

    return intervalId;
}

const intervalId = getCurrentTime();

clearInterval(intervalId);
