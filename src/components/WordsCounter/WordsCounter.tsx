import {Button, Card, CardBody, CardText, CardTitle, Col, Input} from "reactstrap";
import React from "react";
import {Row} from "reactstrap";
import { css } from '@emotion/css';
import {Text} from "recharts";

interface IProps {
    descriptionText: string,
    action: (letter: string) => number | null
}

const WordsCounter = ({action, descriptionText}: IProps) => {
    const [inputValue, setInputValue] = React.useState<string>('');
    const [wordsAmount, setWordsAmount] = React.useState<number | null>(null);

    const clickHandler = () => {
        if (!action) throw new Error('action is not defined');
        const newWordsAmount = action(inputValue);
        setWordsAmount(newWordsAmount);
    };

    const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
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
                            <Button color="success" className={css`width: 100%`} onClick={clickHandler}>fire</Button>
                        </Col>
                        <Col xs={3}>
                            <Input value={wordsAmount ?? ""} readOnly />
                        </Col>
                    </Row>
                </Col>
            </CardBody>
        </Card>
    )
};

export default WordsCounter;