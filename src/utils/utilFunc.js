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


export { delay };