import axios from 'axios';
import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from "react-router-dom";

const Login = () => {

    const [ enteredId, setEnteredId ] = useState('');
    const [ enteredPw, setEnteredPw ] = useState('');

    const [btnIsValid, setBtnIsValid] = useState(false);

    const navigate = useNavigate();

    const idRef = useRef();
    const pwRef = useRef();

    useEffect(() => {
        if (enteredId !== "" && enteredPw !== "") {
          setBtnIsValid(true);
        } else {
          setBtnIsValid(false);
        }
    }, [enteredId, enteredPw]);

    const onKeyIdPress = (e) => {
        if (enteredId !== "" && e.key === "Enter") {
            pwRef.current.focus();
        }
    };

    const onKeyPassPress = (e) => {
        if ( enteredId !== '' && enteredPw !== '' && e.key === "Enter" ) {
            goLogin();
        }
    };


    const goLogin = async () => {
        try {
            const params = {
                id: enteredId,
                pass: enteredPw
            }

            const response = await axios.get(
                '/api/user/login', { params }
            );

            console.log(response.data);
            localStorage.setItem('position', response.data.usr_position);

            if (response.data.msg == 'success') {
                navigate('/main');
            }

        } catch (e) {
            console.error(e);
        }

    }


    return (
        <>
            <input
                type="text"
                ref={idRef}
                value = { enteredId }
                onKeyPress={onKeyIdPress}
                onChange = {(e) => setEnteredId(e.target.value)}
                placeholder="아이디입력"
            />

            <input
                type="password" 
                value = { enteredPw }
                ref = { pwRef }
                placeholder="비밀번호입력" 
                onKeyPress = {onKeyPassPress}
                onChange={ (e) => setEnteredPw(e.target.value) }
            />

            {
                btnIsValid
                    ?
                        <button
                            onClick={() => goLogin()}
                        >
                            로그인
                        </button>
                    :
                        <button
                            disabled
                        >
                            로그인
                        </button>
            }
        </>
    )
}


export default Login;