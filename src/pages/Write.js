import React, { useState, useEffect } from 'react';

const Write = () => {

    useEffect(() => {
        console.log('Write 화면 최초 렌더링');
    },[])

    return (
        <>
            <h2>Write</h2>
        </>
    )
}

export default Write;