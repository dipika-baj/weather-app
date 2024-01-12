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

const secToDateConverter = (time, option) => {
    let date = new Date(time * 1000);
    return option === 'day'
        ? date.toLocaleString('en-us', { weekday: 'long' })
        : `${date.getHours()} : ${date.getMinutes()}`
}

export { delay, secToDateConverter };