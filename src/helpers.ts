export const isPalindrome = (str: string): boolean => {
    str = str.toLowerCase().replace(/[^a-z]+/g,"");
    return str === str.split("").reverse().join("")
}