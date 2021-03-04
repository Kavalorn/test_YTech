import {Button, Card, CardBody, CardTitle, Col, Input} from "reactstrap";
import React from "react";
import {Row} from "reactstrap";
import { css } from '@emotion/css';
import CountChart from "../CountChart";

interface IProps {
    descriptionText: string,
    action: (letter: string) => number | null
}

export type ChartDataChunk = {
    letter: string,
    repetitions: number
}

const WordsCounter = ({action, descriptionText}: IProps) => {
    const [inputValue, setInputValue] = React.useState<string>('');
    const [wordsAmount, setWordsAmount] = React.useState<number | null>(null);
    const [chartData, setChartData] = React.useState<ChartDataChunk[]>([]);

    const updateChartDataItem = (newItem: ChartDataChunk) => {
        if (chartData.find(chunk => chunk.letter === newItem.letter)) {
            setChartData(chartData.map(chunk => chunk.letter !== newItem.letter ? chunk : newItem ));
        } else {
            setChartData([...chartData, newItem]);
        }
    };

    const clickHandler = (): void => {
        const newWordsAmount = action(inputValue);
        setWordsAmount(newWordsAmount);
        const newItem: ChartDataChunk = {
            letter: inputValue.toLowerCase(),
            repetitions: newWordsAmount || 0
        };
        updateChartDataItem(newItem)
    };

    const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const value = e.target.value;
        if (value.length > 1) return;
        const newValue = value.replace(/[^A-Za-z]/ig, '');
        setInputValue(newValue);
    };

    return (
        <Card className={css`
                            margin-bottom: 20px;
                            transition: all .2s ease-out;
                            &:hover {
                              box-shadow: 0 0 10px #ccc;
                            }
                        `}>
            <CardBody>
                <Col>
                    <CardTitle tag="h5">{descriptionText}</CardTitle>
                    <Row>
                        <Col xs={6}>
                            <Input value={inputValue} onChange={inputChangeHandler}/>
                        </Col>
                        <Col xs={3}>
                            <Button color="success" className={css`width: 100%`} onClick={clickHandler} disabled={!inputValue}>fire</Button>
                        </Col>
                        <Col xs={3}>
                            <Input value={wordsAmount ?? ""} readOnly />
                        </Col>
                    </Row>
                </Col>
                <CountChart data={chartData} />
            </CardBody>
        </Card>
    )
};

export default WordsCounter;