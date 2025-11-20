//functions relating to cookies creating, setting, removing, checking if they're allowed or not when re-opening

const cookiesAllowedCookie = "__recipe-builder__cookies_allowed";
const recipeCookie = "__recipe-builder__recipe";

const getCookieObj = () => {
    //get current cookies
    let cookies = document.cookie;
    //convert to array
    cookies = cookies.split("; ");

    //create an object to output cookie details
    let cookieObj = {};

    cookies.forEach(element => {
        //for each cookie, split at the = and add items to cookieObj
        let cookie = element.split("=");
        cookieObj[cookie[0]] = cookie[1];
    });

    return cookieObj;
};

export function cookiesAllowed() {
    return document.cookie.includes(`${cookiesAllowedCookie}=true`)
}

export function setRecipeCookie(recipe) {
    if (recipe.length === 0) {
        //clear the cookie if an empty array is passed
        document.cookie = `${recipeCookie}=null`;
    } else {
        //pass the new ingredient list into the array
        console.log("Setting cookie");
        document.cookie = `${recipeCookie}=${JSON.stringify(recipe)}`;
    }
    
}

//returns the ingredient list array or an empty array if none is found
export function recallRecipeCookie() {
    const cookies = document.cookie;

    let recipe = [];

    if (cookies.includes(recipeCookie)){
        let cookie = cookies.split(`${recipeCookie}=`)[1];
        cookie = cookie.split("; ")[0];
        if (cookie != "null"){
            recipe = JSON.parse(cookie);
        }


        
    }

    return recipe;
}
