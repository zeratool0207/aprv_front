import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Main = () => {

    const [ userName, setUserName ] = useState('');
    const [ position, setPosition ] = useState('');
    const [ reprYn, setReprYn ] = useState('N');

    const navigate = useNavigate();

    // const [] = useState();
    // const [] = useState([]);

    useEffect( () => {
        goBoard();
    },[])

    const goBoard = async () => {
        try {
            const response = await axios.get(
                '/api/board/list'
            );

            // console.log(response);
            // console.log(response.data);
            // console.log(response.data[0]);

            console.log(response.data[0].boardList);
            console.log(response.data[0].searchTypeList);
            console.log(response.data[0].aprvStatusList);

            
            setUserName(response.data[0].boardList[0].usr_name);
            setPosition(response.data[0].boardList[0].cod_name);
            setReprYn(response.data[0].boardList[0].repr_yn);
        } catch (e) {
            console.error(e);
        }
    }

    const goLogout = async () => {
        try {
            const response = await axios.get(
                '/api/user/logout'
            );

            if (response.status == '200') {
                navigate('/');
            }
        } catch(e) {
            console.error(e)
        }
    }

    return (
        <>
            <h2>{userName}({position}) 님 환영합니다.</h2>
            <button type="button" onClick={() => goLogout()}>로그아웃</button> &nbsp;
            <button type="button">글쓰기</button>  &nbsp;
            { reprYn == 'Y' && <button>대리결제</button>}
        </>
    )
}

export default Main;

// brd_content: "업무결재"
// brd_created_at: "2022-03-01"
// brd_created_by: "netflix"
// brd_id: 1
// brd_status: "B001"
// cod_id: "A001"
// cod_name: "사원"
// repr_yn: "N"
// usr_name: "이대용"
// usr_position: "A001"
