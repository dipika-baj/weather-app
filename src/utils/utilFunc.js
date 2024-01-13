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

const secToDateConverter = (timeZone, option) => {
    let date = new Date();

    if (option == 'date') {
        const options = { timeZone: timeZone, weekday: 'long' };
        const formattedDate = new Intl.DateTimeFormat('en-US', options).format(date);
        return formattedDate;
    }
    else if (option == 'time') {
        const options = { timeZone: timeZone, hour12: true, hour: '2-digit', minute: '2-digit' };
        const formattedTime = new Intl.DateTimeFormat('en-US', options).format(date);
        return formattedTime;
    }
}

export { delay, secToDateConverter };




