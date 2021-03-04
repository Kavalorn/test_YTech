// just to define api layer, but its not necessary for this case. I just don`t found any api to work with without headache. instead just added dictionary.json which is some eng dict from zee internet
export const fetchDictionary = (): Promise<{ [key: string]: string }> => {
    return fetch("dictionary.json", {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    })
        .then(res => res.json())
};