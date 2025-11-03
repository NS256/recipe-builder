//functions relating to cookies creating, setting, removing, checking if they're allowed or not when re-opening

const cookiesAllowedCookie = "__recipe-builder__cookies_allowed"

export function cookiesAllowed() {
    return document.cookie.includes(`${cookiesAllowedCookie}=true`)
}