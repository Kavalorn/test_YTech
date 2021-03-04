import { observable, action } from 'mobx';
import {fetchDictionary} from './api';
import {isPalindrome} from "./helpers";

export default class DictionaryStore {
    @observable dictionary: { [key: string]: string } = {};

    constructor() {
        this.getDictionary()
    }

    @action
    getDictionary = () => {
        fetchDictionary().then(dictionary => this.dictionary = dictionary)
    };

    @action
    getWordsCountStartedWithLetter = (letter: string): number => {
        return Object.keys(this.dictionary).filter((word: string) => {
             return word.toLowerCase().startsWith(letter.toLowerCase())
        }).length;
    };

    @action
    getWordsCountWithLetter = (letter: string): number => {
        return Object.keys(this.dictionary).filter((word: string) => {
            return word.toLowerCase().includes(letter.toLowerCase())
        }).length;
    };

    @action
    getWordsCountEndedWithLetter = (letter: string): number => {
        return Object.keys(this.dictionary).filter((word: string) => {
            return word.toLowerCase().endsWith(letter.toLowerCase())
        }).length;
    };

    @action
    getWordsCountWithSameLetterRepeatedTwice = (letter: string): number => {
        const regexp = new RegExp(`${letter}{2}`);
        return Object.keys(this.dictionary).filter((word: string) => {
            return regexp.test(word)
        }).length;
    };

    // and the "other queries"
    @action
    getWordDescription = (word: string): string => {
        return this.dictionary.hasOwnProperty(word) ? this.dictionary[word] : '';
    };

    @action
    getPalindromes = (): string => {
        return Object.keys(this.dictionary).filter((word: string) => {
            return isPalindrome(word);
        }).toString();
    };

    @action
    getDictionaryItemDescription = (key: string): string => {
        return this.dictionary[key];
    };

}