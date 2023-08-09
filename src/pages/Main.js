import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Main = () => {

    useEffect( () => {
        goBoard();
    },[])

    const goBoard = async () => {
        try {
            const response = await axios.get(
                '/api/board/list'
            );

            console.log(response)
        } catch (e) {
            console.error(e);
        }
    }


    return (
        <>
            <h2>Main</h2>
        </>
    )
}

export default Main;