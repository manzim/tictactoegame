import { Alert } from '@blueprintjs/core';
import React, { useState } from 'react';
import { useHistory } from 'react-router';
import Board from './Board';

import './Game.css'

interface Player {
    firstPlayer: string,
    secondPlayer: string
}

export default function Game(props: Player) {

    let historyDom = useHistory();

    const [history, setHistory] = useState([{ squares: new Array(9) }]);
    const [stepNumber, setStepNumber] = useState(0);
    const [xIsNext, setXIsNext] = useState(true);
    const [finished, setFinished] = useState(false);

    const handleClick = (i: number) => {
        if (finished) {
            return;
        }
        if (stepNumber >= 9) {
            setFinished(true);
            return;
        }
        const _history = history.slice(0, stepNumber + 1);
        const squares = [..._history[_history.length - 1].squares];

        if (squares[i]) {
            return;
        }
        const winner = calculateWinner(squares);
        if (winner) {
            <Alert
                canEscapeKeyCancel={true}
                cancelButtonText="reset"
                confirmButtonText="See History"
                canOutsideClickCancel={true}
                // @ts-ignore
                onConfirm={() => historyDom.push('/history')}
                // @ts-ignore   
                onCancel={() => historyDom.push('/gamewindow')}
            />;
            setFinished(true);

            return;
        }
        squares[i] = xIsNext ? "X" : "O";
        setHistory([..._history, { squares }]);
        setStepNumber(_history.length);
        setXIsNext(!xIsNext);
    };

    const _history = [...history];
    const squares = [..._history[stepNumber].squares];
    const winner = calculateWinner(squares);
    const status = winner
        ? "Winner: " + winner
        : "Next player: " + (xIsNext ? "X" : "O");

    return (
        <div className="game pt-5 align-items-center">
            <Board
                squares={squares}
                finished={finished}
                onClick={i => handleClick(i)}
            />
            <div className="game-info center pt5">
                <div>{status}</div>
            </div>
        </div>
    );
}
function calculateWinner(squares: Array<string>) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    const length = lines.length;
    for (let i = 0; i < length; i++) {
        const [a, b, c] = lines[i];
        const player = squares[a];
        if (player && player === squares[b] && player === squares[c]) {
            return player
        }
    }
    
    return null;
}
