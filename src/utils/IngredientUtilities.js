class Ingredient {
    constructor(name, quantity, prepTime, cookTime, restTime) {
        this.name = name;
        this.quantity = quantity;
        this.prepTime = prepTime;
        this.cookTime = cookTime;
        this.restTime = restTime;
    }
}

export const normalizeTime = (cookTime) => {

    //takes in the current cooking time and and converts to seconds before converting back to hours, minutes, and seconds to ensure each field is in the correct format
    let cookSeconds = Math.max(0,(
        (cookTime.hours * 3600) +
        (cookTime.minutes * 60) +
        cookTime.seconds
    ));

    //calculate the correct hours and take away from cook seconds
    const hours = Math.floor(cookSeconds / 3600);   
    cookSeconds %= 3600;

    //calculate correct minutes and take away from cook seconds
    const minutes = Math.floor(cookSeconds / 60);
    cookSeconds %= 60;

    const seconds = cookSeconds;

    return {hours, minutes, seconds};
}