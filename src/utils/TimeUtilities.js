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