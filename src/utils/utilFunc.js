const delay = (time = 5000) => {
    return new Promise((resolve, reject) => {
        if (typeof time !== "number") {
            reject("Aa");
        }
        setTimeout(() => {
            resolve();
        }, time);
    });
};

const secToDateConverter = (timestamp = '', timeZone, option) => {
    let date = timestamp ? new Date(timestamp * 1000) : new Date();

    if (option == 'date') {
        const options = { timeZone: timeZone, weekday: 'long' };
        const formattedDate = new Intl.DateTimeFormat('en-US', options).format(date);
        return formattedDate;
    }
    else if (option == 'time') {
        const options = { timeZone: timeZone, hour12: false, hour: '2-digit', minute: '2-digit' };
        const formattedTime = new Intl.DateTimeFormat('en-US', options).format(date);
        return formattedTime;
    }
}

const changeToFahrenheit = (temp) => {
    return ((temp * 9 / 5) + 32)
}

export { delay, secToDateConverter, changeToFahrenheit };




