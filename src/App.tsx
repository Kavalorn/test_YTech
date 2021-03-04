import React from 'react';
import {
    Container
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useRootState} from "./StateContext";
import WordsCounter from "./components/WordsCounter";
import WordsViewer from "./components/WordsViewer";
import { css } from '@emotion/css';

function App() {
    const rootState = useRootState();
    const {dictionaryStore} = rootState;

    return (
        <Container className={css`
                padding: 32px
              `}
        >
            <WordsCounter descriptionText={"Get words count started with specific letter"} action={dictionaryStore.getWordsCountStartedWithLetter} />
            <WordsCounter descriptionText={"Get words count with specific letter"} action={dictionaryStore.getWordsCountWithLetter} />
            <WordsCounter descriptionText={"Get words count ended with specific letter"} action={dictionaryStore.getWordsCountEndedWithLetter} />
            <WordsCounter descriptionText={"Get words count with specific letter repeated twice in a row"} action={dictionaryStore.getWordsCountWithSameLetterRepeatedTwice} />

            <WordsViewer descriptionText={"Get word description"} action={dictionaryStore.getWordDescription} />
            <WordsViewer descriptionText={"Get palindromes"} action={dictionaryStore.getPalindromes} withoutInput={true} />
        </Container>
    );
}

export default App;
