function findMatching(drivers, name) {
    return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());
};

function fuzzyMatch(drivers, letters) {
    return drivers.filter(function(driver) {
        return driver.substring(0, letters.length) === letters;
    });
};

function matchName(drivers, name) {
    return drivers.filter(function(driver) {
        return driver.name === name;
    });
};