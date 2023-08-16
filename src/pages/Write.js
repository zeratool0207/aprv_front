import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';


const Write = () => {
    const { state } = useLocation();

    const [usrName, setUsrName] = useState('');
    const [brdId, setBrdId] = useState('');

    useEffect(() => {
        setUsrName(localStorage.getItem('name'));
    },[]);


    useEffect( () => {
        if ( state == 'brandNew') {
            // console.log('새거');
            goNextBrdId();
        } else {
            // console.log('헌거');
            goWrite(state);
        }
    },[state]);

    const goNextBrdId = async () => {
        try {
            const response = await axios.get(
                '/api/write/nextBrdId'
            );

            // console.log(response.data);
            setBrdId(response.data);

        } catch (e) {
            console.error(e);
        }
    }

    const [ histList, setHistList ] = useState([]);

    const goWrite = async (brd_id) => {
        try {

            const params = {
                brd_id: brd_id
            }

            const response = await axios.get(
                '/api/write/list',{ params }
            );

            setBrdId(response.data[0].boardList[0].brd_id);

            // setBoardList(response.data[0].boardList);
            // setSearchTypeList(response.data[0].searchTypeList);
            // setAprvStatusList(response.data[0].aprvStatusList);
            
            // setUserName(response.data[0].boardList[0].usr_name);
            // setPosition(response.data[0].boardList[0].cod_name);
            // setReprYn(response.data[0].boardList[0].repr_yn);

            // console.log(response.data[0].boardList);
        } catch (e) {
            console.error(e);
        }
    }

    return (
        <>
            <h2>Write</h2>
            <table border="1">
                <thead>
                    <tr>
                        <th>결재요청</th>
                        <th>과장</th>
                        <th>부장</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><input type="checkbox" disabled></input></td>
                        <td><input type="checkbox" disabled></input></td>
                        <td><input type="checkbox" disabled></input></td>
                    </tr>
                </tbody>
            </table>
            <div>
                번호: <input type="text" value={brdId} disabled></input><br/>
                작성자: <input type="text" value={usrName} disabled></input><br/>
                제목: <input type="text"></input><br/>
                내용: <textarea></textarea>
            </div>
            <div>
                <button type="button">반려</button>
                <button type="button">임시저장</button>
                <button type="button">결재</button>
            </div>
            <table border="1">
                <thead>
                    <tr>
                        <th>번호</th>
                        <th>결재일</th>
                        <th>결재자</th>
                        <th>결재상태</th>
                    </tr>
                </thead>
                <tbody>
                    {/* {histList.map((item, idx) => (
                        <tr key={"histList"+idx}>
                            <td>{item.hst_id}</td>
                            <td>{item.hst_approved_at}</td>
                            <td>{item.hst_approved_by}</td>
                            <td>{item.hst_status_name}</td>
                        </tr>
                    ))} */}
                </tbody>
            </table>

        </>
    )
}

export default Write;