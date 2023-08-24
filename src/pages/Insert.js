import {useState, useEffect} from 'react';
import axios from 'axios';

const Insert = () => {

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

    const goStatusChange = async () => {

        let brdStatus = '';

        const param = {
            brd_id: brdId,
            brd_content: brdContent,
            brd_created_by: usrName,
            brd_created_at: '',
            brd_status: '',
            brd_title: brdTitle,
        }

        try {
            const response = await axios.put(
                '/api/write/insert'
            )
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
                제목: <input type="text" value={''}></input><br/>
                내용: <textarea value={''}></textarea>
            </div>
            <div>
                {position == 'A003' || position == 'A004' || position == 'A005' ? <button type="button">반려</button> : null}
                {position == 'A001' || position == 'A002' ? <button type="button">임시저장</button> : null }
                {position == 'A001' || position == 'A002' ? <button type="button">결재</button> : null}
            </div>
        </>
    )
}

export default Insert;