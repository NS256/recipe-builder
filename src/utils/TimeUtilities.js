//takes in the current cooking time as an object with hours, minutes and seconds then outputs total time in seconds
export const storeTime = (cookTime) => {

    let cookSeconds = Math.max(0,(
        (cookTime.hours * 3600) +
        (cookTime.minutes * 60) +
        cookTime.seconds
    ));

    return cookSeconds;
}


//takes in the cooktime in seconds and converts to an object with hours, minutes and seconds
export const recallTime = (cookTime) => {

    

    let cookSeconds = cookTime;

    //calculate the correct hours and take away from cook seconds
    const hours = Math.floor(cookSeconds / 3600);   
    cookSeconds %= 3600;

    //calculate correct minutes and take away from cook seconds
    const minutes = Math.floor(cookSeconds / 60);
    cookSeconds %= 60;

    const seconds = cookSeconds;

    return {hours, minutes, seconds};
}

/* input 
    {
        hour: 0,
        minute: -,
        second: 0,
    }
    
    or 
    3600
*/
export const timeToString = (cookSeconds) => {
    const supportedTypes = ["object,number"];

    //return -1 for any inputs that aren't an object or number
    if (typeof(cookSeconds) !== "object" && typeof(cookSeconds) !== "number" && !Number.isInteger(cookSeconds)) return -1;

    //check for invalid objects
    if (
        (
            typeof(cookSeconds) === "object" && 
            (Object.keys(cookSeconds).length !== 3 || !(Object.keys(cookSeconds).includes("hours") && Object.keys(cookSeconds).includes("minutes") && Object.keys(cookSeconds).includes("seconds") )
            )
        )
    ) return -1;

    //check for invalid numbers
    if (typeof(cookSeconds) === "number" && (cookSeconds < 0 || !Number.isInteger(cookSeconds))) return -1;


    //convert integers to the object so all inputs can be handled the same
    const cookTime = (typeof(cookSeconds) == "number")? recallTime(cookSeconds): cookSeconds;

    let cookTimeStr = "";

    if (cookTime.hours != 0) {
        // use a ternary so we don't inject `false` into the string when not plural
        cookTimeStr += `${cookTime.hours} hour${cookTime.hours === 1 ? '' : 's'}`;
    }

    if (cookTime.minutes != 0) {
        cookTimeStr += `${(cookTimeStr !== "") ? ", ": ""}${cookTime.minutes} minute${cookTime.minutes === 1 ? '' : 's'}`;
    }

    if (cookTime.seconds != 0 || (cookTime.hours === 0 || cookTime.minutes === 0)) {
        // treat 1 as singular, everything else plural (including 0)
        cookTimeStr += `${(cookTimeStr !== "") ? ", ": ""}${cookTime.seconds} second${cookTime.seconds === 1 ? '' : 's'}`;
    }

    return cookTimeStr;
}