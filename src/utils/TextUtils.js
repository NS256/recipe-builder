export const capitalize = (inputStr) => {
    //split the inputStr into each individual word
    const words = inputStr.toLowerCase().split(" ");

    //create output string to store each capitalized word
    let wordsCapitalized = words.map(word => {
        if (!word) return '';  // handle empty strings
        let newWord = word.charAt(0).toUpperCase();
        newWord += word.slice(1);
        return newWord;
    });

    const outputStr = wordsCapitalized.join(" ");
    return outputStr
};