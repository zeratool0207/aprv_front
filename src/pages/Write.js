import React, { useState, useEffect } from 'react';

const Write = () => {

    const [ histList, setHistList ] = useState([]);

    useEffect(() => {
        console.log('Write 화면 최초 렌더링');
    },[])

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
                번호: <input type="text"></input><br/>
                작성자: <input type="text"></input><br/>
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