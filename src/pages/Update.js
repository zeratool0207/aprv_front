import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

const Update = () => {
    const { state } = useLocation();

    const [ usrName, setUsrName ] = useState('');
    const [ position, setPosition ] = useState('');
    const [ brdId, setBrdId ] = useState('');
    const [ brdTitle, setBrdTitle ] = useState('');
    const [ brdContent ,setBrdContent ] = useState('');
    const [ brdStatus ,setBrdStatus ] = useState('');

    const [ histList, setHistList ] = useState([]);
    const [ boardList, setBoardList ] = useState([]);

    useEffect(() => {
        setUsrName(localStorage.getItem('name'));
        setPosition(localStorage.getItem('position'));
        goWrite(state);
    },[]);

    const goWrite = async (brd_id) => {
        try {

            const params = {
                brd_id: brd_id
            }

            const response = await axios.get(
                '/api/write/list',{ params }
            );

            console.log(response.data[0]);
            setBrdId(response.data[0].boardList[0].brd_id);
            setHistList(response.data[0].histList);
            setBoardList(response.data[0].boardList[0]);

            setBrdStatus(response.data[0].boardList[0].brd_status);
            setBrdTitle(response.data[0].boardList[0].brd_title);
            setBrdContent(response.data[0].boardList[0].brd_content);

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
                        <th>임시저장</th>
                        <th>결재대기</th>
                        <th>결재중</th>
                        <th>결재완료</th>
                        <th>반려</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><input type="checkbox" checked={position === 'A001' ? true : false} disabled></input></td>
                        <td><input type="checkbox" checked={position ==='A002' ? true : false} disabled></input></td>
                        <td><input type="checkbox" checked={position === 'A003' ? true : false} disabled></input></td>
                        <td><input type="checkbox" checked={position === 'A004' ? true : false} disabled></input></td>
                        <td><input type="checkbox" checked={position === 'A005' ? true : false} disabled></input></td>
                    </tr>
                </tbody>
            </table>
            <div>
                번호: <input type="text" value={brdId} disabled></input><br/>
                작성자: <input type="text" value={usrName} disabled></input><br/>
                제목: <input type="text" value={brdTitle}></input><br/>
                내용: <textarea value={brdContent}></textarea>
            </div>
            <div>
                {position === 'A003' || position === 'A004' || position === 'A005' ? <button type="button">반려</button> : null}
                {position === 'A001' || position === 'A002' ? <button type="button">임시저장</button> : null }
                {position === 'A001' || position === 'A002' ? <button type="button">결재</button> : null}
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
                    {histList.map((item, idx) => (
                        <tr key={"histList"+idx}>
                            <td>{item.hst_id}</td>
                            <td>{item.hst_approved_at}</td>
                            <td>{item.hst_approved_by}</td>
                            <td>{item.hst_status_name}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </>
    )
}

export default Update;