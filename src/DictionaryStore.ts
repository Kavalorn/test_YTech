import { observable, action } from 'mobx';
import {fetchDictionary} from './api';
import {isPalindrome} from "./helpers";

export default class DictionaryStore {
    dictionary: { [key: string]: string } = {};

    constructor() {
        this.getDictionary()
    }

    @action
    getDictionary = (): void => {
        fetchDictionary().then(dictionary => this.dictionary = dictionary)
    };

    getWordsCountStartedWithLetter = (letter: string): number => {
        return Object.keys(this.dictionary).filter((word: string) => {
             return word.toLowerCase().startsWith(letter.toLowerCase())
        }).length;
    };

    getWordsCountWithLetter = (letter: string): number => {
        return Object.keys(this.dictionary).filter((word: string) => {
            return word.toLowerCase().includes(letter.toLowerCase())
        }).length;
    };

    getWordsCountEndedWithLetter = (letter: string): number => {
        return Object.keys(this.dictionary).filter((word: string) => {
            return word.toLowerCase().endsWith(letter.toLowerCase())
        }).length;
    };

    getWordsCountWithSameLetterRepeatedTwice = (letter: string): number => {
        const regexp = new RegExp(`${letter}{2}`);
        return Object.keys(this.dictionary).filter((word: string) => {
            return regexp.test(word)
        }).length;
    };

    // and the "other queries"
    getWordDescription = (word: string): string | null => {
        return this.dictionary.hasOwnProperty(word) ? this.dictionary[word] : "Word isn`t found";
    };

    getPalindromes = (): string | null => {
        return Object.keys(this.dictionary).filter((word: string) => {
            return isPalindrome(word);
        }).join(', ')
    };

}