import { Button } from '@blueprintjs/core';
import React, { useState } from 'react';
import { useHistory } from 'react-router';

export function Login() {

    let history = useHistory();

    const [playerOne, setPlayerOne] = useState<string>('')
    const [playerTwo, setPlayerTwo] = useState<string>('')

    return (
        <>
            <div className="vh-100 dt w-100 flex-column flex center justify-center items-align-center">
                <div className="dtc w-10 center v-mid mb3">
                    <input
                        required
                        type="text"
                        value={playerOne}
                        placeholder="player one name"
                        onChange={(e) => setPlayerOne(e.target.value)}
                    />
                </div>
                <div className="dtc w-10 center v-mid mb3">
                    <input
                        required
                        type="text"
                        value={playerTwo}
                        placeholder="player two name"
                        onChange={(e) => setPlayerTwo(e.target.value)}
                    />
                </div>
                <div className="center flex justify-center">
                    <Button
                        text={"move to game window"}
                        intent="success"
                        disabled={(playerOne?.length) > 0 && (playerTwo?.length) > 0 ? false : true}
                        onClick={() => history.push('/gamewindow')}
                    />
                </div>
            </div>

        </>
    )
}