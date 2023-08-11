import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Main = () => {


    const [ userName, setUserName ] = useState('');
    const [ position, setPosition ] = useState('');
    const [ reprYn, setReprYn ] = useState('N');

    const navigate = useNavigate();

    const [ boardList, setBoardList ] = useState([]);
    const [ searchTypeList, setSearchTypeList ] = useState([]);
    const [ aprvStatusList, setAprvStatusList ] = useState([]);

    useEffect( () => {
        goBoard();
    },[])

    const goBoard = async () => {
        try {
            const response = await axios.get(
                '/api/board/list'
            );

            setBoardList(response.data[0].boardList);
            setSearchTypeList(response.data[0].searchTypeList);
            setAprvStatusList(response.data[0].aprvStatusList);
            
            setUserName(response.data[0].boardList[0].usr_name);
            setPosition(response.data[0].boardList[0].cod_name);
            setReprYn(response.data[0].boardList[0].repr_yn);

            console.log(response.data[0].boardList);
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

    const goWrite = () => {
        navigate('/write')
    }


    return (
        <>
            <h2>{userName}({position}) 님 환영합니다.</h2>
            <button type="button" onClick={() => goLogout()}>로그아웃</button> &nbsp;
            <button type="button" onClick={() => goWrite()}>글쓰기</button>  &nbsp;
            { reprYn == 'Y' && <button>대리결제</button>}
            <br/> <br/>
            <select>
                {searchTypeList.map((item, idx) => (
                    <option value={item.cod_id} key={'searchType'+idx}>{item.cod_name}</option>
                ))}
            </select>
            &nbsp;

            <input type="text" />
            &nbsp;

            <select>
                {aprvStatusList.map((item, idx) => (
                    <option value={item.cod_id} key={'aprvStatus'+idx}>{item.cod_name}</option>
                ))}
            </select>
            <br/> <br/>
            <input type="date"></input>&nbsp;&nbsp;
            <input type="date"></input>



            <table border="1">
                <thead>
                    <tr>
                        <th>번호</th>
                        <th>작성자</th>
                        <th>제목</th>
                        <th>작성일</th>
                        <th>결재일</th>
                        <th>결재자</th>
                        <th>결재상태</th>
                    </tr>
                </thead>
                <tbody>
                    {boardList.map((item) => (
                        <tr>
                            <td>{item.brd_id}</td>
                            <td>{item.brd_created_by}</td>
                            <td>{item.brd_content}</td>
                            <td>{item.brd_created_at}</td>
                            <td>{item.brd_approved_at}</td>
                            <td>{item.brd_approved_by}</td>
                            <td>{item.brd_status_name}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            
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
