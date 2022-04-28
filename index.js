// Code your solution in this file!

const returnFirstTwoDrivers = (array) => {
    return array.slice(0,2);
}

const returnLastTwoDrivers = (array) => {
    return array.slice(array.length - 2, array.length)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(fare) {
    return function (ride) {
        return fare * ride;
    }
}

const fareDoubler = (fare) => {
    return createFareMultiplier(2)(fare);
}

const fareTripler = (fare) => {
    return createFareMultiplier(3)(fare);
}

function selectDifferentDrivers(arrayOfDrivers, functionName) {
    return functionName(arrayOfDrivers);
}