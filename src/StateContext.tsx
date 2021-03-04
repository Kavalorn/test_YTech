import React from 'react';
import DictionaryStore from './DictionaryStore';

type RootStoreType = {
    dictionaryStore: DictionaryStore;
}

const StateContext = React.createContext<RootStoreType>({} as RootStoreType);

const dictionaryStore = new DictionaryStore();

export const StateProvider: React.FC<React.PropsWithChildren<{}>> = ({children}) => {
    return (
        <StateContext.Provider value={{dictionaryStore}}>
            {children}
        </StateContext.Provider>
    )
}

export const useRootState = () => React.useContext(StateContext);