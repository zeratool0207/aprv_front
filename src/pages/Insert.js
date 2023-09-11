import {useState, useEffect} from 'react';
import axios from 'axios';

const Insert = () => {

    /* 
        추가

        1. Insert시:  Board insert
        2. Insert시:  History insert
        
    */

    const [ brdId, setBrdId ] = useState('');
    const [ brdContent, setBrdContent ] = useState('');
    const [ brdTitle, setBrdTitle ] = useState('');

    const [ usrName, setUsrName ] = useState('');
    const [ position, setPosition ] = useState('');

    useEffect(() => {
        setUsrName(localStorage.getItem('name'));
        setPosition(localStorage.getItem('position'));
        goNextBrdId();
    },[]);

    const goNextBrdId = async () => {
        try {
            const response = await axios.get(
                '/api/write/nextBrdId'
            );
            setBrdId(response.data);

        } catch (e) {
            console.error(e);
        }
    }

    // 임시저장 및 결재요청
    const goInsert = async (cd) => {

        console.log(brdId);
        console.log(typeof brdId);


        const param = {
            brd_id: brdId,
            brd_content: brdContent,
            brd_created_by: usrName,
            // brd_created_at: '',
            brd_status: cd,
            brd_title: brdTitle,
        }

        try {
            const response = await axios.put(
                '/api/write',{param}
            )
            console.log(response);
        }catch (e) {
            console.error(e);
        }
    }

    return (
        <>
            <h2>Insert</h2>
            <div>
                번호: <input type="text" value={brdId} disabled></input><br/>
                작성자: <input type="text" value={usrName} disabled></input><br/>
                제목: <input type="text" value={brdTitle} onChange={(e) => setBrdTitle(e.target.value)}></input><br/>
                내용: <textarea value={brdContent} onChange={(e) => setBrdContent(e.target.value)}></textarea>
            </div>
            <div>
                { position === 'A001' || position === 'A002' ? <button type="button" onClick={() => goInsert('B001')}>임시저장</button> : null }
                { position === 'A001' || position === 'A002' ? <button type="button" onClick={() => goInsert('B002')}>결재요청</button> : null }
            </div>
        </>
    )
}

export default Insert;