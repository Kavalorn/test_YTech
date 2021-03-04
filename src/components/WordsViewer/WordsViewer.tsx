import {Button, Card, CardBody, CardText, CardTitle, Col, Input} from "reactstrap";
import React from "react";
import {Row} from "reactstrap";
import { css } from '@emotion/css';

interface IProps {
    descriptionText: string,
    action: (word: string) => string | null
    withoutInput?: boolean
}

const WordsViewer = ({action, descriptionText, withoutInput = false}: IProps) => {
    const [inputValue, setInputValue] = React.useState<string>('');
    const [text, setText] = React.useState<string | null>(null);

    const clickHandler = (): void => {
        if (!action) throw new Error('action is not defined');
        const newText = action(inputValue);
        setText(newText);
    };

    const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const value = e.target.value;
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
                        {!withoutInput ? (
                            <Col xs={9}>
                                <Input value={inputValue} onChange={inputChangeHandler} />
                            </Col>
                        ) : null}
                        <Col xs={!withoutInput ? 3 : 12}>
                            <Button color="success" className={css`width: 100%`} onClick={clickHandler} disabled={withoutInput ? !withoutInput : !inputValue}>fire</Button>
                        </Col>
                        <Col xs={12} className={'mt-2'}>
                            {text}
                        </Col>
                    </Row>
                </Col>
            </CardBody>
        </Card>
    )
};

export default WordsViewer;