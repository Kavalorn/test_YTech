import React from 'react';
import {CartesianGrid, XAxis, YAxis, ResponsiveContainer, BarChart, Tooltip, Legend, Bar} from "recharts";
import {Col} from "reactstrap";
import {css} from "@emotion/css";

interface IProps {
    data: {
        letter: string,
        repetitions: number
    }[]
}

const CountChart = ({data}: IProps) => {

    return !data.length ? null : (
        <Col className={css`height: 300px; width: 100%; padding-top: 32px`}>
            <ResponsiveContainer>
                <BarChart
                    width={500}
                    height={300}
                    data={data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                    barSize={20}
                >
                    <XAxis dataKey="letter" scale="point" padding={{ left: 10, right: 10 }} />
                    <Tooltip />
                    <CartesianGrid strokeDasharray="3 3" />
                    <Bar dataKey="repetitions" fill="#8884d8" background={{ fill: '#eee' }} />
                </BarChart>
            </ResponsiveContainer>
        </Col>
    )
};

export default CountChart;